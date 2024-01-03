<script setup lang="ts">

// import IconMarket from "@/components/icons/IconMarket.vue";
import HeroImage from "@/components/HeroImage.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import Navigation from "@/components/Navigation.vue";

const route = useRoute();
const market = route.query.market;
let nameStr = route.query.productName
nameStr = nameStr.split(" ");
let productName = nameStr.join('+');


const data = ref(null);
const loading = ref(false);
const error = ref(null);
let products = ref(null);
let priceDiffPercent = ref(null);

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
    difference = products[0].differenceString.split(/[()]/);
    difference = difference[1]
  }
});

</script>

<template>
  <Navigation/>
  <HeroImage/>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div v-if="data !== null">
      <section>
        <h1 class="product-header">{{ products[0].productName }}</h1>
<!--        <IconMarket productName="{{products[0].productMarket}}"/>-->
        <div>
          {{ products[0].currentPrice }}€ | <s>{{ products[0].previousPrice }}€</s>
        </div>
        <div v-if="difference !== undefined">
          <div v-if="difference.startsWith('-')" class="neg-dif">{{ priceDiffPercent }}</div>
        <div v-if="difference.startsWith('+')" class="pos-dif">{{ priceDiffPercent }}</div>
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

.neg-dif {
  color: darkred;
}

.pos-dif {
  color: darkgreen;
}
</style>