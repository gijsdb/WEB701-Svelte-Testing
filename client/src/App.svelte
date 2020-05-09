 <script>
	import Link from './Router/Link.svelte';
	import Route from './Router/Route.svelte';
</script>

<style>
nav {
	width: 100%;
	border: 2px black solid;
}
</style>

<!-- Navigation goes here -->

<nav>
    <ul class="justify-content-center nav">
      <li class="nav-item my-auto">
		<Link page={{path: '/', name: 'Home'}} />
      </li>
      <li class="nav-item my-auto">
        <Link page={{path: '/register', name: 'Register'}} />
      </li>
      <li class="nav-item my-auto">
        <Link page={{path: '/login', name: 'Login'}} />
      </li>
      <li class="nav-item my-auto">
        <Link page={{path: '/marketplace', name: 'Marketplace'}} />
      </li>
      <li class="nav-item my-auto">
		<p>logout</p>
      </li>
    </ul>
  </nav>

<!-- Main container goes here -->
<Route />