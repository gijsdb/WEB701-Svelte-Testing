<script>
</script>

<main>
  <div class="container padTop">
    <div class="row">
      <div class="col">
        <h1>Marketplace</h1>
      </div>
    </div>
     <div class="row padTop">
          <div class="col">
            <h1>Hops stored in database</h1>
          </div>
      </div>

    <div class="row padBottom" v-for="chunk in productChunks">
<!-- v-for="hop in hops" :key="hop.id" !-->
      <div class="col-md-4" v-for="hop in chunk">
        <div class="card hopCard" style="width: 18rem;">
          <img src="../assets/isolatedHop.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">variety</h5>
            <p class="card-text"> Bitterness: </p>
            <p class="card-text"> Sweetness:</p>
            <p class="card-text"> Weight:</p>
            <p class="card-text"> Price: </p>
            <p class="card-text"> Added by:</p>
          </div>
        </div>
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