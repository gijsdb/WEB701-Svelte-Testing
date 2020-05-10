<script>
import AddProduct from './AddProduct.svelte'
import Link from '../Router/Link.svelte';

import axios from 'axios'

  let hops = []

  axios
    .get("http://localhost:8091/retrievehops")
    .then(res => {
      hops = res.data;
  })
</script>

<main>
  <div class="container padTop">
    <div class="row">
      <div class="col">
        <h1>Marketplace</h1>
      </div>
    </div>
    <AddProduct></AddProduct>
    <div class="row padTop">
      <div class="col">
        <h1>Hops stored in database</h1>
      </div>
    </div>

    <div class="row padBottom">
    {#each hops as hop}
      <div class="col-md-4">
        <div class="card hopCard" style="width: 18rem;">
          <img src="../Assets/isolatedHop.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">variety: {hop.variety}</h5>
            <p class="card-text"> Bitterness: {hop.bitterness}</p>
            <p class="card-text"> Sweetness: {hop.sweetness}</p>
            <p class="card-text"> Weight: {hop.weight}</p>
            <p class="card-text"> Price: {hop.price}</p>
            <p class="card-text"> Added by: {hop.userId}</p>
          </div>
            <Link page={{path: '/buyhop/'+ hop.hopId, name: 'BuyHop'}} />
        </div>
      </div>
      {/each}
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