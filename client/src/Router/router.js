import Home from '../Components/Home.svelte';
import Login from '../Components/Login.svelte';

import { writable } from 'svelte/store';

export default [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
]