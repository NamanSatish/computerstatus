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
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[0])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[1])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[2])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[3])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[4])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.ateraColors[5])" :value=10></b-progress-bar>
      <b-progress-bar  striped animated :variant="returnProgressColor(props.row.ateraColors[6])" :value=10></b-progress-bar>
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
      <b-progress-bar  striped animated :variant="returnPatchColor(props.row.patchColors[6])" :value=10></b-progress-bar>
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
      <b-progress-bar  striped animated :variant="returnProgressColor(props.row.sophosColors[6])" :value=10></b-progress-bar>
    </b-progress>
    </span>
    <span v-if="props.column.field == 'screenconnecthealth'">
    <b-progress :max=70 class="mb-2">
      <b-progress-bar :variant="returnProgressColor(props.row.screenconnectColors[0])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.screenconnectColors[1])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.screenconnectColors[2])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.screenconnectColors[3])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.screenconnectColors[4])" :value=10></b-progress-bar>
      <b-progress-bar :variant="returnProgressColor(props.row.screenconnectColors[5])" :value=10></b-progress-bar>
      <b-progress-bar  striped animated :variant="returnProgressColor(props.row.screenconnectColors[6])" :value=10></b-progress-bar>
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
      <b-progress-bar  striped animated :variant="returnProgressColor(props.row.winverColors[6])" :value=10></b-progress-bar>
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
      patchprogressColors:["danger","success","warning","danger"],
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
      if(patch == -1){
        return "danger"
      }else if(patch ==-2){
        return "dark"  
      }else if(patch ==-3){
        return "info"  
      }else if(patch == 0){
        return "success"
      } else if(patch>0 && patch<4){
        return "warning"
      } else if(patch>=4){
        return "danger"
      }

    },
    returnProgressColor(value){
      if(value == -1){
        return "danger"
      }else if(value == 0){
        return "warning"  
      }else if(value == 1){
        return "success"  
      }else if(value == 4){
        return "dark"
      } else if(value == 5){
        return "info"
      } else {
        return "primary"
      }
    }
  },
    

  mounted(){
    axios.request({url: "http://app.relion365.com/api/computers/", method:"get"} ).then((response)=>{  // API CALL
      console.log("API DATA RECIEVED")
      var data = response.data
      var output = []
      for(var i = 0; i< data.length ; i++){  //Store all the data in a new format that has all the variables we want to use
          var temp = []
          var readable = new Date(data[i].created_at)
          readable = readable.toLocaleDateString()
          temp.push( data[i].id, readable, data[i].computer, data[i].atera)
          var sectemp = {id:data[i].id,time:readable,computer:data[i].computer,atera:data[i].atera,ateraArray:[],ateraDateArray:[],ateraColors:[4,4,4,4,4,4,5],patch:data[i].patch,patchArray:[],patchDateArray:[],patchColors:[-2,-2,-2,-2,-2,-2,-3],sophos:data[i].sophos,sophosArray:[],sophosDateArray:[],sophosColors:[4,4,4,4,4,4,5],screenconnect:data[i].screenconnect,screenconnectArray:[],screenconnectDateArray:[],screenconnectColors:[4,4,4,4,4,4,5],winver:data[i].winver,winverArray:[],winverDateArray:[],winverColors:[4,4,4,4,4,4,5]}
          this.tableData.push(sectemp)
          output.push(temp);
          
      }

      var ref = new Date(); // Create a referal date that we use to calculate 7 days ago
      var currentmonth = ref.getMonth()+1; //Get the current month (Need to add one bc it starts at 0)
      var currentday = ref.getDate(); //Get the current day (Eg. 21)
      for(var i = 0; i< this.tableData.length; i++){ //Our first Loop
        this.tableData[i].ateraArray.push(this.tableData[i].atera) // Push the values we have into an array
        this.tableData[i].patchArray.push(this.tableData[i].patch)
        this.tableData[i].sophosArray.push(this.tableData[i].sophos)
        this.tableData[i].screenconnectArray.push(this.tableData[i].screenconnect)
        this.tableData[i].winverArray.push(this.tableData[i].winver)
        var reportdate = new Date(this.tableData[i].time) //Get the date that a certain report was made
        if(currentmonth == reportdate.getMonth()+1 && currentday - reportdate.getDate() < 6 && currentday - reportdate.getDate() > -1){ // If it is in the same month and less than 6 days ago, proceed
          this.tableData[i].ateraColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].atera
          this.tableData[i].ateraDateArray.push({date:this.tableData[i].time, atera:this.tableData[i].atera})

          this.tableData[i].patchColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].patch
          this.tableData[i].patchDateArray.push({date:this.tableData[i].time, patch:this.tableData[i].patch})

          this.tableData[i].sophosColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].sophos
          this.tableData[i].sophosDateArray.push({date:this.tableData[i].time, sophos:this.tableData[i].sophos})

          this.tableData[i].screenconnectColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].screenconnect
          this.tableData[i].screenconnectDateArray.push({date:this.tableData[i].time, screenconnect:this.tableData[i].screenconnect})

          this.tableData[i].winverColors[(6- (currentday - reportdate.getDate()))] = this.tableData[i].winver
          this.tableData[i].winverDateArray.push({date:this.tableData[i].time, winver:this.tableData[i].winver}) // Set the index of your day to the value of the report - Read the array from left to right, as it would be displayed on the health bar
        }
        for(var n = i; n<this.tableData.length ;n++){ //Our second loop to collect all of the reports of the same computer
          if(this.tableData[i].computer == this.tableData[n].computer && i!=n){ // Loop and look for reports that share the same name, but not the same index (Prevent the loop from running on the main first object)
            //this.tableData[i].atera +=this.tableData[n].atera
           var reportdaten = new Date(this.tableData[n].time) // Create a new refferal date for each of the reports of the same computer
            if(currentmonth == reportdaten.getMonth()+1 && currentday - reportdaten.getDate() < 6 && currentday - reportdaten.getDate() > -1){ //Proceed if they pass the correct date requirements
              this.tableData[i].ateraColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].atera
              this.tableData[i].ateraDateArray.push({date:this.tableData[n].time, atera:this.tableData[n].atera})

              this.tableData[i].patchColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].patch
              this.tableData[i].patchDateArray.push({date:this.tableData[n].time, patch:this.tableData[n].patch})

              this.tableData[i].sophosColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].sophos
              this.tableData[i].sophosDateArray.push({date:this.tableData[n].time, sophos:this.tableData[n].sophos})

              this.tableData[i].screenconnectColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].screenconnect
              this.tableData[i].screenconnectDateArray.push({date:this.tableData[n].time, screenconnect:this.tableData[n].screenconnect})

              this.tableData[i].winverColors[(6 - (currentday - reportdaten.getDate()))] = this.tableData[n].winver
              this.tableData[i].winverDateArray.push({date:this.tableData[n].time, winver:this.tableData[n].winver}) // Same thing as before. We get the difference between today and the day it was taken, eg 1. We then subtract that from 6 to find where in the array it should be placed. In this case, 6-1 is 5, so place it in index 5, one spot away from the current day.

            }
            this.tableData[i].ateraArray.push(this.tableData[n].atera)
            this.tableData[i].patchArray.push(this.tableData[n].patch)
            this.tableData[i].sophosArray.push(this.tableData[n].sophos)
            this.tableData[i].screenconnectArray.push(this.tableData[n].screenconnect)
            this.tableData[i].winverArray.push(this.tableData[n].winver) //Pushing the data to the array for record keeping

            this.tableData.splice(n, 1) //Remove the extra report after we have extracted all the relavent info. This makes sure that it will not be displayed in the table
          }
      }





      }
      output.forEach(element => {
        this.pivotData.push(element);
      });
      console.log(this.tableData)
      this.isDataLoading = false; // The table can now be allowed to load
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
