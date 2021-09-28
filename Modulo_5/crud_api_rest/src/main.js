import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import { initializeApp } from "firebase/app";
import firebaseConfig from './configs/firebase.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
const app = initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  router,
  app,
  render: h => h(App)
}).$mount('#app')
