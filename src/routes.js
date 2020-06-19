import Home from './components/Home';
import User from './components/User';

export default [
  { path: '/', component: Home },
  { path: '/user/:id', component: User },
];
