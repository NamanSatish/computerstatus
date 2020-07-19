<template>
<div id="app">
    
    <vue-pivottable
        :data="pivotData"
        aggregatorName='Count'
        rendererName='Table Heatmap'
        :rows="['computer']"
        :cols="['atera']"
        :vals="['atera']"
    >
    </vue-pivottable>

<vue-good-table
  v-if="!this.isDataLoading"
      :columns="vuecolumns"
      :rows="tableData">
  <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'health'">
    <b-progress :max=70 class="mb-3">
      <b-progress-bar variant="primary" :value=10></b-progress-bar>
      <b-progress-bar variant="success" :value=10></b-progress-bar>
      <b-progress-bar variant="info" :value=10></b-progress-bar>
      <b-progress-bar variant="primary" :value=10></b-progress-bar>
      <b-progress-bar variant="success" :value=10></b-progress-bar>
      <b-progress-bar variant="info" :value=10></b-progress-bar>
      <b-progress-bar variant="primary" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'atera0'">
      <span v-if="props.row.ateraArray.filter(x => x==0).length >0" style="font-weight: bold; color: green;">{{props.row.ateraArray.filter(x => x==0).length}}</span> 
    </span>
    <span v-if="props.column.field == 'atera1'">
      <span v-if="props.row.ateraArray.filter(x => x==1).length >0" style="font-weight: bold; color: orange;">{{props.row.ateraArray.filter(x => x==1).length}}</span> 
    </span>
        <span v-if="props.column.field == 'atera2'">
      <span v-if="props.row.ateraArray.filter(x => x==2).length >0" style="font-weight: bold; color: red;">{{props.row.ateraArray.filter(x => x==2).length}}</span> 
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
  </template>
</vue-good-table>

  <!-- <v-client-table v-if="!this.isDataLoading" :data="tableData" :columns="columns" :options="options"/> -->


  </div>
</template>
<script>
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'App',
  components: {
    VuePivottableUi,
    VueGoodTable
  },
  data () {
    return {
      pivotData: [['ID', 'time', 'computer', 'atera']],
      dataheaders: ['ID', 'time', 'computer', 'atera'],
      tableData:[],
      columns: ['computer', 'atera'],
      options:{},
      isDataLoading:true,
      vuecolumns: [
        {
          label: 'Computer',
          field: 'computer',
        },
        {
          label: 'Atera-0',
          field: 'atera0',
          
        },
                {
          label: 'Atera-1',
          field: 'atera1',
          
        },
                {
          label: 'Atera-2',
          field: 'atera2',
          
        },
        {
          label: 'Health',
          field: 'health',
          
        },
      ],

    }
  },
  mounted(){
    axios.request({url: "http://app.relion365.com/api/computers/", method:"get"} ).then((response)=>{ 
      var data = response.data
      var output = []
      for(var i = 0; i< data.length ; i++){
          var temp = []
          var readable = new Date(data[i].created_at)
          readable = readable.toLocaleDateString()
          temp.push( data[i].id, readable, data[i].computer, data[i].atera)
          var sectemp = {id:data[i].id,time:readable,computer:data[i].computer,atera:data[i].atera,ateraArray:[],ateraDateArray:[]}
          this.tableData.push(sectemp)
          output.push(temp);
          
      }
      var ref = new Date();
      var currentmonth = ref.getMonth()+1;
      var currentday = ref.getDate();
      for(var i = 0; i< this.tableData.length; i++){
        this.tableData[i].ateraArray.push(this.tableData[i].atera)
        var reportdate = new Date(this.tableData[i].time)
        console.log(reportdate)
        if(currentmonth == reportdate.getMonth()+1 && currentday - reportdate.getDate() < 6){
        this.tableData[i].ateraDateArray.push({date:this.tableData[i].time, atera:this.tableData[i].atera})
        }
        for(var n = 0; n<this.tableData.length;n++){
          if(this.tableData[i].computer == this.tableData[n].computer && i!=n){
            //this.tableData[i].atera +=this.tableData[n].atera
           var reportdaten = new Date(this.tableData[n].time)
            if(currentmonth == reportdaten.getMonth()+1 && currentday - reportdaten.getDate() < 6){
            this.tableData[i].ateraDateArray.push({date:this.tableData[n].time, atera:this.tableData[n].atera})
            }
            this.tableData[i].ateraArray.push(this.tableData[n].atera)
            this.tableData.splice(n, 1)
          }
      }





      }
      output.forEach(element => {
        this.pivotData.push(element);
      });
      console.log(this.tableData)
      this.isDataLoading = false;
    })
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
