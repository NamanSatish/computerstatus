<template>

<vue-good-table
  v-if="!this.isDataLoading"
      :columns="vuecolumns"
      :rows="tableData">
  <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'aterahealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[0])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[1])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[2])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[3])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[4])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[5])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[6])" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'patchhealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="returnPatchColor(props.row.patchColors[0])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnPatchColor(props.row.patchColors[1])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnPatchColor(props.row.patchColors[2])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnPatchColor(props.row.patchColors[3])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnPatchColor(props.row.patchColors[4])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnPatchColor(props.row.patchColors[5])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnPatchColor(props.row.patchColors[6])" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'sophoshealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="returnProgressColor(props.row.sophosColors[0])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.sophosColors[1])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.sophosColors[2])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.sophosColors[3])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.sophosColors[4])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.sophosColors[5])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.sophosColors[6])" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'screenconnecthealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="returnProgressColor(props.row.scColors[0])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.scColors[1])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.scColors[2])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.scColors[3])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.scColors[4])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.scColors[5])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.scColors[6])" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'winverhealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="returnProgressColor(props.row.winverColors[0])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.winverColors[1])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.winverColors[2])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.winverColors[3])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.winverColors[4])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.winverColors[5])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.winverColors[6])" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
  </template>
</vue-good-table>

  <!-- <v-client-table v-if="!this.isDataLoading" :data="tableData" :columns="columns" :options="options"/> -->



</template>
<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'App',
  components: {
    VueGoodTable
  },
  data () {
    return {
      tableData:[],
      options:{},
      isDataLoading:false,
      vuecolumns: [
        {
          label: 'Computer',
          field: 'name',
        },
        {
          label: 'Atera Health',
          field: 'aterahealth',
          width: '150px',
          
        },
        {
          label: 'Patch Health',
          field: 'patchhealth',
          width: '150px',
          
        },
        {
          label: 'Sophos Health',
          field: 'sophoshealth',
          width: '150px',
          
        },
        {
          label: 'ScreenConnect',
          field: 'screenconnecthealth',
          width: '150px',
          
        },
        {
          label: 'Winver Health',
          field: 'winverhealth',
          width: '150px',
          
        },
      ],
    }
  },
  methods:{
    returnPatchColor(patch){
      if(patch == -2){
        return "dark"
      }else if(patch ==-1){
        return "secondary"  
      }else if(patch == 0){
        return "success"
      } else if(patch>0 && patch<4){
        return "warning"
      } else if(patch>=4){
        return "danger"
      }

    },
    returnProgressColor(value){
      if(value == 0){
        return "success"
      }else if(value == 1){
        return "dark"  
      }else if(value == 2){
        return "danger"  
      }else if(value == -1){
        return "secondary"
      } else {
        return "primary"
      }
    }
  },
    

  mounted(){
    axios.request({url: "http://app.relion365.com/api/healthcheck/", method:"get"} ).then((response)=>{  // API CALL
      console.log("API DATA RECIEVED")
      console.log(response.data)
      this.tableData = response.data
      var currentTime = new Date();
      for(var i = 0; i<this.tableData.length; i++){

        this.tableData[i].ateraColors=[-1,-1,-1,-1,-1,-1,-1]
        this.tableData[i].patchColors=[-1,-1,-1,-1,-1,-1,-1];
        this.tableData[i].sophosColors=[-1,-1,-1,-1,-1,-1,-1];
        this.tableData[i].scColors=[-1,-1,-1,-1,-1,-1,-1];
        this.tableData[i].winverColors=[-1,-1,-1,-1,-1,-1,-1];
        for(var n = 0; n<this.tableData[i].computer_healthchecks.length;n++){
          var reportdate = new Date(this.tableData[i].computer_healthchecks[n].created_at)
          if((currentTime.getMonth()+1 == reportdate.getMonth()+1) && (currentTime.getDate() - reportdate.getDate() < 6) && (currentTime.getDate() - reportdate.getDate() > -1)){
            this.tableData[i].ateraColors[(6- (currentTime.getDate() - reportdate.getDate()))] = this.tableData[i].computer_healthchecks[n].atera_health
            this.tableData[i].patchColors[(6- (currentTime.getDate() - reportdate.getDate()))] = this.tableData[i].computer_healthchecks[n].patch_health
            this.tableData[i].sophosColors[(6- (currentTime.getDate() - reportdate.getDate()))] = this.tableData[i].computer_healthchecks[n].sophos_health
            this.tableData[i].scColors[(6- (currentTime.getDate() - reportdate.getDate()))] = this.tableData[i].computer_healthchecks[n].sc_health
            this.tableData[i].winverColors[(6- (currentTime.getDate() - reportdate.getDate()))] = this.tableData[i].computer_healthchecks[n].winver_health
          }
        }

      }
      console.log(this.tableData)
      this.isDataLoading = false;
    })

  }
}

</script>

