// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/style.css'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";


Vue.config.productionTip = false

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
