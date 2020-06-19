import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
