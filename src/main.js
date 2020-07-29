import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'


Vue.use(VueGoodTablePlugin);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
