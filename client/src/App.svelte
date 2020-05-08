 <script>
	import Link from './Router/Link.svelte';
	import Route from './Router/Route.svelte';
	export let name;
</script>

<style>
</style>

<!-- Navigation goes here -->
<Link page={{path: '/', name: 'Home'}} />
<Link page={{path: '/login', name: 'Login'}} />

<!-- Main container goes here -->
<Route />