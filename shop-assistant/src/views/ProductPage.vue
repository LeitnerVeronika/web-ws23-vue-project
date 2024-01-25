<script setup lang="ts">

import HeroImage from "@/components/HeroImage.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import Market from "@/components/Market.vue";
import Labels from "@/components/Labels.vue";

/** these variables are used to get the parameters for the redirect from the home page */
const route = useRoute();
let market = route.query.market;
let nameStr = route.query.productName.split(" ");
let productName = nameStr.join('+');


const data = ref(null);
const loading = ref(false);
const error = ref(null);
let products = ref(null);
let difference = ref(null);
let labels = [];

/** loads data from backend according to productName and market*/
onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/api/search?productName=' + productName + '&markets=' + market);
    data.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;
    products = data.value.products;
    market = products[0].productMarket;
    addLabels();
  }
});

function addLabels() {
  if (products[0].productVegan !== 'false') {
    labels = [...labels, 'vegan']
  }
  if (products[0].productVegetarisch !== 'false') {
    labels = [...labels, 'vegetarisch']
  }
  if (products[0].productGlutenfrei !== 'false') {
    labels = [...labels, 'glutenfrei']
  }
  if (products[0].productLaktosefrei !== 'false') {
    labels = [...labels, 'laktosefrei']
  }
}

</script>

<template>
  <HeroImage/>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div v-if="data !== null">
      <section>
        <h1 class="product-header">{{ products[0].productName }}</h1>
        <div class="market-container">
          <Market :text="market"></Market>
        </div>
        <div v-if="products[0].previousPrice !== ''">
          {{ products[0].currentPrice }}€ | <s>{{ products[0].previousPrice }}€</s>
        </div>
        <div v-else>
          {{ products[0].currentPrice }}€
        </div>
        <div v-if="difference !== undefined">
          <div :class="[products[0].differenceColor]">{{ products[0].differencePercent }}%</div>
        </div>
        <div class="label-container">
          <div v-for="label in labels" class="label">
            <Labels :text="label"></Labels>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
section {
  text-align: center;

}

.product-header {
  color: var(--color-primary);
}

.market-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2em;
}

.label-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.label{
  margin: 0.5em;
}

/** classes dynamically match to differenceColor */
.red {
  color: darkred;
}

.green {
  color: darkgreen;
}
</style>