import Vue from 'vue'
import App from './App.vue'
import VuePivottable from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Pivot } from 'vue-pivot-table-plus'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

import Bars from 'vuebars'

Vue.use(Bars)
Vue.use(VueGoodTablePlugin);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ClientTable,  {},false, 'bootstrap4', {});

Vue.use(Pivot)
Vue.use(VueAxios, axios)
Vue.use(VuePivottable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
