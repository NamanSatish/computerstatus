<template>
 <StreamBarcodeReader
    @decode="onDecode"
    @loaded="onLoaded"
></StreamBarcodeReader>


</template>
<script>

import { StreamBarcodeReader } from "vue-barcode-reader";




export default {
  name: 'App',
  components: {
    StreamBarcodeReader,
  },
  data () {
    return {
      text: "",
      id: null,
    }
  },
  methods:{
    onDecode(a, b, c) {
      alert(a + b + c)
      console.log(a, b, c);
      this.text = a;
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(() => {
        if (this.text === a) {
          this.text = "";
        }
      }, 5000);
    },
    onLoaded() {
      console.log("load");
    },
  },
    

  mounted(){

  }
}

</script>

