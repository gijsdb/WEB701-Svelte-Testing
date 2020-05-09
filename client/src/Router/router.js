import Home from '../Components/Home.svelte';
import Login from '../Components/Login.svelte';
import Register from '../Components/Register.svelte'
import Marketplace from  '../Components/Marketplace.svelte'

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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/marketplace',
      name: 'Marketplace',
      component: Marketplace
    }
]