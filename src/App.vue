<template>

    
    <!-- <vue-pivottable
        :data="pivotData"
        aggregatorName='Count'
        rendererName='Table Heatmap'
        :rows="['computer']"
        :cols="['atera']"
        :vals="['atera']"
    >
    </vue-pivottable> -->

<vue-good-table
  v-if="!this.isDataLoading"
      :columns="vuecolumns"
      :rows="tableData">
  <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'aterahealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="progressColors[props.row.ateraColors[0]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.ateraColors[1]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.ateraColors[2]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.ateraColors[3]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.ateraColors[4]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.ateraColors[5]+1]" :value=10></b-progress-bar>
      <b-progress-bar  striped animated :variant="progressColors[props.row.ateraColors[6]+1]" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'patchhealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="progressColors[props.row.patchColors[0]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.patchColors[1]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.patchColors[2]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.patchColors[3]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.patchColors[4]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.patchColors[5]+1]" :value=10></b-progress-bar>
      <b-progress-bar  striped animated :variant="progressColors[props.row.patchColors[6]+1]" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'sophoshealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="progressColors[props.row.sophosColors[0]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.sophosColors[1]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.sophosColors[2]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.sophosColors[3]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.sophosColors[4]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.sophosColors[5]+1]" :value=10></b-progress-bar>
      <b-progress-bar  striped animated :variant="progressColors[props.row.sophosColors[6]+1]" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'screenconnecthealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="progressColors[props.row.screenconnectColors[0]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.screenconnectColors[1]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.screenconnectColors[2]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.screenconnectColors[3]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.screenconnectColors[4]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.screenconnectColors[5]+1]" :value=10></b-progress-bar>
      <b-progress-bar  striped animated :variant="progressColors[props.row.screenconnectColors[6]+1]" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'winverhealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="progressColors[props.row.winverColors[0]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.winverColors[1]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.winverColors[2]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.winverColors[3]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.winverColors[4]+1]" :value=10></b-progress-bar>
      <b-progress-bar :variant="progressColors[props.row.winverColors[5]+1]" :value=10></b-progress-bar>
      <b-progress-bar  striped animated :variant="progressColors[props.row.winverColors[6]+1]" :value=10></b-progress-bar>
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

    <span v-if="props.column.field == 'patch0'">
      <span v-if="props.row.patchArray.filter(x => x==0).length >0" style="font-weight: bold; color: green;">{{props.row.patchArray.filter(x => x==0).length}}</span> 
    </span>
    <span v-if="props.column.field == 'patch1'">
      <span v-if="props.row.patchArray.filter(x => x==1).length >0" style="font-weight: bold; color: orange;">{{props.row.patchArray.filter(x => x==1).length}}</span> 
    </span>
        <span v-if="props.column.field == 'patch2'">
      <span v-if="props.row.patchArray.filter(x => x==2).length >0" style="font-weight: bold; color: red;">{{props.row.patchArray.filter(x => x==2).length}}</span> 
    </span>

    <span v-if="props.column.field == 'sophos0'">
      <span v-if="props.row.sophosArray.filter(x => x==0).length >0" style="font-weight: bold; color: green;">{{props.row.sophosArray.filter(x => x==0).length}}</span> 
    </span>
    <span v-if="props.column.field == 'sophos1'">
      <span v-if="props.row.sophosArray.filter(x => x==1).length >0" style="font-weight: bold; color: orange;">{{props.row.sophosArray.filter(x => x==1).length}}</span> 
    </span>
        <span v-if="props.column.field == 'sophos2'">
      <span v-if="props.row.sophosArray.filter(x => x==2).length >0" style="font-weight: bold; color: red;">{{props.row.sophosArray.filter(x => x==2).length}}</span> 
    </span>

    <span v-if="props.column.field == 'screenconnect0'">
      <span v-if="props.row.screenconnectArray.filter(x => x==0).length >0" style="font-weight: bold; color: green;">{{props.row.screenconnectArray.filter(x => x==0).length}}</span> 
    </span>
    <span v-if="props.column.field == 'screenconnect1'">
      <span v-if="props.row.screenconnectArray.filter(x => x==1).length >0" style="font-weight: bold; color: orange;">{{props.row.screenconnectArray.filter(x => x==1).length}}</span> 
    </span>
        <span v-if="props.column.field == 'screenconnect2'">
      <span v-if="props.row.screenconnectArray.filter(x => x==2).length >0" style="font-weight: bold; color: red;">{{props.row.screenconnectArray.filter(x => x==2).length}}</span> 
    </span>

    <span v-if="props.column.field == 'winver0'">
      <span v-if="props.row.winverArray.filter(x => x==0).length >0" style="font-weight: bold; color: green;">{{props.row.winverArray.filter(x => x==0).length}}</span> 
    </span>
    <span v-if="props.column.field == 'winver1'">
      <span v-if="props.row.winverArray.filter(x => x==1).length >0" style="font-weight: bold; color: orange;">{{props.row.winverArray.filter(x => x==1).length}}</span> 
    </span>
        <span v-if="props.column.field == 'winver2'">
      <span v-if="props.row.winverArray.filter(x => x==2).length >0" style="font-weight: bold; color: red;">{{props.row.winverArray.filter(x => x==2).length}}</span> 
    </span>    
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
  </template>
</vue-good-table>

  <!-- <v-client-table v-if="!this.isDataLoading" :data="tableData" :columns="columns" :options="options"/> -->



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
      progressColors:["danger","warning","success","danger","danger","dark","info"], //-1 is failure, 0 is not detected, 1 is detected
      vuecolumns: [
        {
          label: 'Computer',
          field: 'computer',
        },
        {
          label: 'Atera-0',
          field: 'atera0',
          hidden: true,
        },
                {
          label: 'Atera-1',
          field: 'atera1',
          hidden: true,
        },
                {
          label: 'Atera-2',
          field: 'atera2',
          hidden: true,
        },
        {
          label: 'Patch-0',
          field: 'patch0',
          hidden: true,
        },
                {
          label: 'Patch-1',
          field: 'patch1',
          hidden: true,
        },
                {
          label: 'Patch-2',
          field: 'patch2',
          hidden: true,
        }
        ,
        {
          label: 'Sophos-0',
          field: 'sophos0',
          hidden: true,
        },
                {
          label: 'Sophos-1',
          field: 'sophos1',
          hidden: true,
        },
                {
          label: 'Sophos-2',
          field: 'sophos2',
          hidden: true,
        }
        ,
        {
          label: 'Screenconnect-0',
          field: 'screenconnect0',
          hidden: true,
        },
                {
          label: 'Screenconnect-1',
          field: 'screenconnect1',
          hidden: true,
        },
                {
          label: 'Screenconnect-2',
          field: 'screenconnect2',
          hidden: true,
        }
        ,
        {
          label: 'Winver-0',
          field: 'winver0',
          hidden: true,
        },
                {
          label: 'Winver-1',
          field: 'winver1',
          hidden: true,
        },
                {
          label: 'Winver-2',
          field: 'winver2',
          hidden: true,
        },
        {
          label: 'Atera Health',
          field: 'aterahealth',
          
        },
        {
          label: 'Patch Health',
          field: 'patchhealth',
          
        },
        {
          label: 'Sophos Health',
          field: 'sophoshealth',
          
        },
        {
          label: 'ScreenConnect',
          field: 'screenconnecthealth',
          
        },
        {
          label: 'Winver Health',
          field: 'winverhealth',
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
          var sectemp = {id:data[i].id,time:readable,computer:data[i].computer,atera:data[i].atera,ateraArray:[],ateraDateArray:[],ateraColors:[4,4,4,4,4,4,5],patch:data[i].patch,patchArray:[],patchDateArray:[],patchColors:[4,4,4,4,4,4,5],sophos:data[i].sophos,sophosArray:[],sophosDateArray:[],sophosColors:[4,4,4,4,4,4,5],screenconnect:data[i].screenconnect,screenconnectArray:[],screenconnectDateArray:[],screenconnectColors:[4,4,4,4,4,4,5],winver:data[i].winver,winverArray:[],winverDateArray:[],winverColors:[4,4,4,4,4,4,5]}
          this.tableData.push(sectemp)
          output.push(temp);
          
      }
      var ref = new Date();
      var currentmonth = ref.getMonth()+1;
      var currentday = ref.getDate();
      for(var i = 0; i< this.tableData.length; i++){
        this.tableData[i].ateraArray.push(this.tableData[i].atera)
        this.tableData[i].patchArray.push(this.tableData[i].patch)
        this.tableData[i].sophosArray.push(this.tableData[i].sophos)
        this.tableData[i].screenconnectArray.push(this.tableData[i].screenconnect)
        this.tableData[i].winverArray.push(this.tableData[i].winver)
        var reportdate = new Date(this.tableData[i].time)
        if(currentmonth == reportdate.getMonth()+1 && currentday - reportdate.getDate() < 6 && currentday - reportdate.getDate() > -1){
          this.tableData[i].ateraColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].atera
          this.tableData[i].ateraDateArray.push({date:this.tableData[i].time, atera:this.tableData[i].atera})

          this.tableData[i].patchColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].patch
          this.tableData[i].patchDateArray.push({date:this.tableData[i].time, patch:this.tableData[i].patch})

          this.tableData[i].sophosColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].sophos
          this.tableData[i].sophosDateArray.push({date:this.tableData[i].time, sophos:this.tableData[i].sophos})

          this.tableData[i].screenconnectColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].screenconnect
          this.tableData[i].screenconnectDateArray.push({date:this.tableData[i].time, screenconnect:this.tableData[i].screenconnect})

          this.tableData[i].winverColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].winver
          this.tableData[i].winverDateArray.push({date:this.tableData[i].time, winver:this.tableData[i].winver})
        }
        for(var n = 0; n<this.tableData.length;n++){
          if(this.tableData[i].computer == this.tableData[n].computer && i!=n){
            //this.tableData[i].atera +=this.tableData[n].atera
           var reportdaten = new Date(this.tableData[n].time)
            if(currentmonth == reportdaten.getMonth()+1 && currentday - reportdaten.getDate() < 6 && currentday - reportdaten.getDate() > -1){
              this.tableData[i].ateraColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].atera
              this.tableData[i].ateraDateArray.push({date:this.tableData[n].time, atera:this.tableData[n].atera})

              this.tableData[i].patchColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].patch
              this.tableData[i].patchDateArray.push({date:this.tableData[n].time, patch:this.tableData[n].patch})

              this.tableData[i].sophosColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].sophos
              this.tableData[i].sophosDateArray.push({date:this.tableData[n].time, sophos:this.tableData[n].sophos})

              this.tableData[i].screenconnectColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].screenconnect
              this.tableData[i].screenconnectDateArray.push({date:this.tableData[n].time, screenconnect:this.tableData[n].screenconnect})

              this.tableData[i].winverColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].winver
              this.tableData[i].winverDateArray.push({date:this.tableData[n].time, winver:this.tableData[n].winver})

            }
            this.tableData[i].ateraArray.push(this.tableData[n].atera)
            this.tableData[i].patchArray.push(this.tableData[n].patch)
            this.tableData[i].sophosArray.push(this.tableData[n].sophos)
            this.tableData[i].screenconnectArray.push(this.tableData[n].screenconnect)
            this.tableData[i].winverArray.push(this.tableData[n].winver)

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
