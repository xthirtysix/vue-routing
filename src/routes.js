import Home from './components/Home.vue';
import Users from './components/Users.vue';
import UserStart from './components/UserStart.vue';
import UserDetail from './components/UserDetail.vue';

export default [
  { path: '/', component: Home },
  {
    path: '/users',
    component: Users,
    children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail },
    ],
  },
];
