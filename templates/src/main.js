import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'
import vco from "v-click-outside"
import router from './router/index'
import { sync } from 'vuex-router-sync'

import "@/design/index.scss";
import "@/assets/Added.css";
import VueSweetalert2 from 'vue-sweetalert2';
import store from '@/store'

import App from './App.vue'

//import { initFirebaseBackend } from './authUtils'

/*
const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTId,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPId,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};
*/

//initFirebaseBackend(firebaseConfig);
Vue.filter('toCurrency', function (value) {
  let val = (value/1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
});

Vue.use(VueRouter)
Vue.use(vco)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(require('vue-chartist'))
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places',
  },
  installComponents: true
})
Vue.component('apexchart', VueApexCharts)

// UsersService.init();
// const user = UsersService.getUser();
// if (user && user.username) {
//   store.commit("auth/" + AuthAction.local.SET_USER, user);
// }

// const cart = CartService.getCart();
// store.commit("cart/SET_CART_ITEMS", cart);

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
