import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { auth } from './firebase/init-firebase'

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(()=> {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})

