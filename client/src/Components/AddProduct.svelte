<script>
   import { userStore } from '../Store/index.js'
   import axios from 'axios'

   let variety = ""
   let weight = ""
   let bitterness = ""
   let sweetness = ""
   let price = ""
   let userId = $userStore.user.email
    
   function calculatePrice() {
      // var sweetness = this.sweetness
      // var bitterness = this.bitterness
      var weight = this.weight
      var price
      var multiplier
      if (weight >= 1 && weight <= 20) {
        multiplier = 3
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 21 && weight <= 40) {
        multiplier = 2.7
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 41 && weight <= 60) {
        multiplier = 2.5
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 61 && weight <= 80) {
        multiplier = 2.3
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 81 && weight <= 100) {
        multiplier = 2.1
        price = weight * multiplier
        this.price = price.toFixed(2)
      }
    } 

    async function addHop() {
      try {
        const response = await axios.post(`http://localhost:8091/addhop`, { 
          variety,
          weight,
          bitterness,
          sweetness,
          price,
          userId,
        })
      } catch (error) {
        console.log(response.data.error)
      }
    }

</script>

<main>
<div class="container padTop">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col">
            <h2>Add new hops</h2>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <form class="AddHops" on:submit|preventDefault={addHop}>
                <div class="row">
                  <div class="col">
                  <label>Variety</label><br>
                  <input type="text" name="variety" bind:value={variety} placeholder="variety"><br>
                  <label>Weight (KG)</label><br>
                  <input type="number" v-on:input="calculatePrice" bind:value={weight} name="amount"  min="1" max="100" placeholder="weight"><br>
                  </div>
                  <div class="col">
                    <label>Bitterness</label><br>
                    <input type="number" v-on:input="calculatePrice" bind:value={bitterness} name="bitterness" placeholder="bitterness" min="1" max="10"><br>
                    <label>Sweetness</label><br>
                    <input type="number" v-on:input="calculatePrice" bind:value={sweetness} name="sweetness" placeholder="sweetness" min="1" max="10"><br>
                  </div>
                </div>
                <label>Price (NZD)</label><br>
                <input type="number"  name="price" bind:value={price} placeholder="0 Dollars"><br>
                <button class="btnAddHop">Add hop</button><br>
              <div class="error" v-html="error"/><br>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Free for extra fuctions</h2>
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