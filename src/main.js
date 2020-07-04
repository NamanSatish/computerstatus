import Vue from 'vue'
import App from './App.vue'
import VuePivottable from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Pivot } from 'vue-pivot-table-plus'
Vue.use(Pivot)
Vue.use(VueAxios, axios)
Vue.use(VuePivottable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
