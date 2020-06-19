import Home from './components/Home.vue';
import User from './components/User.vue';

export default [
  { path: '/', component: Home },
  { path: '/user/:id', component: User },
];
