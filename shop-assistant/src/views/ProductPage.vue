<script setup lang="ts">

import HeroImage from "@/components/HeroImage.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import Market from "@/components/Market.vue";

let market: string = '';
const route = useRoute();
market = route.query.market || '';
let nameStr = route.query.productName
nameStr = (nameStr as string)?.split(" ") || [];
let productName = (Array.isArray(nameStr) ? nameStr : []).join('+') || '';


const data = ref({ products: [] });
const loading = ref(false);
const error = ref<null | string>(null);
let products = ref(data.value?.products || []);
let product = ref<ProductPage>({
  productName: "",
  productMarket: "",
  currentPrice: "",
  previousPrice: "",
  differencePercent: "",
  type: 0,
  differenceColor: "",
});
let difference = ref<string>('');
// let market = ref<null | string>(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/api/search?productName=' + productName + '&markets=' + market);
    data.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;
    products.value = (data.value?.products || []) as Product[];
    if(products.value.length > 0) {
      product.value = products.value[0];
    }
  }
});

</script>

<template>
  <HeroImage/>
  {{product}}
  {{products}}
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div v-if="data !== null">
      <section>
        <h1 class="product-header">{{ product?.productName }}</h1>
        <div class="market-container">
          <Market :text="market"></Market>
        </div>
        <div>
          {{ product?.currentPrice }}€ | <s>{{ product?.previousPrice }}€</s>
        </div>
        <div v-if="difference !== undefined">
          <div :class="[product?.differenceColor]">{{ product?.differencePercent}}%</div>
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
.market-container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2em;
}

.red {
  color: darkred;
}

.green {
  color: darkgreen;
}
</style>