import Vue from 'vue';
import VueRouter from 'vue-router'; // 1. import vue-router
import App from './App.vue';
 


import { routes } from './routes.js'; // 2. import const with routes paths

Vue.use(VueRouter);  // 3. use Vue Router
 

const router = new VueRouter ({  // 4. create a VueRouter instance
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 5. use router in the Vue instance

});
