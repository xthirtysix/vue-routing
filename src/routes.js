import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';
import UserStart from './components/UserStart.vue';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';

export default [
  {
    path: '/',
    components: {
      default: Home,
      header: Navbar,
    },
  },
  {
    path: '/users',
    components: {
      default: Users,
      footer: Navbar,
    },
    children: [
      { path: '', component: UserStart, name: 'home' },
      { path: ':id', component: UserDetail },
      {
        path: ':id/edit', component: UserEdit, name: 'userEdit',
      },
    ],
  },
  { path: '*', redirect: '/' },
];
