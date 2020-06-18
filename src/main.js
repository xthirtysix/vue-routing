import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
