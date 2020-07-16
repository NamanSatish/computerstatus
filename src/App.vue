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


  </div>
</template>
<script>
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
  name: 'App',
  components: {
    VuePivottableUi
  },
  data () {
    return {
      pivotData: [['ID', 'time', 'computer', 'atera']],
      dataheaders: ['ID', 'time', 'computer', 'atera'],
      

    }
  },
  mounted(){
    axios.request({url: "http://app.relion365.com/api/computers/", method:"get"} ).then((response)=>{ 
      var data = response.data
      var output = []
      //var secout = []
      for(var i = 0; i< data.length ; i++){
          var temp = []
          //var sectemp = {ID:"",time:"",computer:"",atera:""}
          var readable = new Date(data[i].created_at)
          readable = readable.toLocaleDateString()
          temp.push( data[i].id, readable, data[i].computer, data[i].atera)
          //sectemp["ID"] = data[i].id
          //sectemp["time"] = readable
          //sectemp["computer"] = data[i].computer
          //sectemp["atera"]= data[i].atera
          //this.secdata.push(sectemp)
          output.push(temp);
          
      }
      
      output.forEach(element => {
        this.pivotData.push(element);
      });
      //console.log(this.secdata)
      //this.isDataLoading = false;
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
