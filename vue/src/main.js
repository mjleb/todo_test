import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import api from './api/index';
import lib from './lib/index';


 
createApp(App).use(store).use(router).use(api).use(lib).mount('#app');
 
