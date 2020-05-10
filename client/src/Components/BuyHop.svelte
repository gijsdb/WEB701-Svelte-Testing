<script>
import Link from '../Router/Link.svelte';
import axios from 'axios'

  
</script>

<main>
   <div class="container padTop">
        <router-link class="nav-link padBottom" to="../marketplace">Back</router-link>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
              <div class="col-6">
                <h2>Variety</h2>
                <h3></h3><br>
                <h2>Weight</h2>
                <h3> </h3><br>
              </div>
              <div class="col-6">
                <h2>Bitterness</h2>
                <h3></h3><br>
                <h2>Sweetness</h2>
                <h3></h3><br>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2>Price</h2>
                <h3></h3><br>
              </div>
            </div>
        </div>
        <div class="col-md-6">
          <!-- add bidding here-->
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