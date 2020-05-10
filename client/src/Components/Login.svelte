<script>
 import { userStore } from '../Store/index.js'
 import axios from 'axios'

  let email = ""
  let password = ""
  let isLoggedIn = false
  let user = null
  let token = null

  function handleSubmit() {
	

  }

  async function login () {
      try {
		const response = await axios.post(`http://localhost:8091/login`, { email, password })
		console.log(response)
		token = response.data.token,
		user = response.data.user,
		isLoggedIn = true 
		$userStore = {
			token,
			user,
			isLoggedIn
		}
     } catch (error) {
		console.log(response.data.error)
     }
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
				<form on:submit|preventDefault={login}>
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