import { writable } from 'svelte/store';

export const curRoute = writable('/');

export const userStore = writable(null); // start with no user
