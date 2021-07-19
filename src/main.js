import { createApp } from "vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import App from "./App.vue";
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(fas);
library.add(fab);

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .use(VueAxios, axios)
  .mount("#app");
