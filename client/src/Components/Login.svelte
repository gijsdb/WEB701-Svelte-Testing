<script>
 import { userStore } from '../Store/index.js'

  let email = ""
  let password = ""
  let isLoggedIn = false
  function handleSubmit() {
	
	$userStore = { email, password, isLoggedIn } // simulate login
	console.log($userStore)
	console.log("hello")
  }

</script>

<main>
	<div class="container padTop">
		<div class="row">
			<div class="col">
				<h1>Login</h1>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<form on:submit|preventDefault={handleSubmit}>
					<input
					type="text"
					name="email"
					placeholder="email"
					bind:value={email}
					/>
					<input
					type="password"
					name="password"
					placeholder="password"
					bind:value={password}
					/>
					<div class="error" v-html="error"/><br>
					<button>Login</button>
				</form>
			</div>
		</div>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>