 <script>
	import Link from './Router/Link.svelte';
	import Route from './Router/Route.svelte';
	import { userStore } from './Store/index.js'

	function logout() {
		$userStore = null
	}
</script>

<style>
	nav {
		width: 100%;
		border: 2px black solid;
	}
</style>

<!-- Navigation goes here -->
    {#if $userStore != null}
	  <nav>
	  	<ul class="justify-content-center nav">
			<li class="nav-item my-auto">
				<Link page={{path: '/', name: 'Home'}} />
			</li>
			<li class="nav-item my-auto">
				<Link page={{path: '/marketplace', name: 'Marketplace'}} />
			</li>
			<li class="nav-item my-auto">
				<button type="button" on:click={logout}>Log Out</button>
			</li>
		</ul>
	  </nav>
    {:else}
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
			</ul>
		</nav>
    {/if}
<Route />