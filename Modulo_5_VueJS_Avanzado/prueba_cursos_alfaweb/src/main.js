import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.dispatch("fetchUser", user);
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
});

