// import Vue from 'vue';
import { createApp } from "vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import App from "./App.vue";
import router from './router';

library.add(fas);
// Vue.component('font-awesome-icon', FontAwesomeIcon);

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount("#app");

// Vue.config.productionTip = false

// new Vue({
  // router,
  // render: h => h(App),
// }).$mount('#app')
