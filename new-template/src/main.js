import Vue from 'vue'
import App from './App.vue'

// Loading application components and styles
import loader from './plugins/loader';
Vue.use(loader);
import router from './router';
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

window.app = new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');

