<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import HeroImage from "@/components/HeroImage.vue";
import Heading from "@/components/Heading.vue";
import SearchBar from "@/components/SearchBar.vue";
import ProductTypes from "../components/enums/ProductTypes";
import ProductContainer from "@/components/ProductContainer.vue";
import Filter from '@/components/Filter.vue';

const originalProducts = ref([]);
const filteredProducts = ref([]);
const loading = ref(false);
const error = ref<String | null>(null);


/** loads the 10 products with the highest price difference
 *  this request works with the old API which will be not available for long
 *  currently no information for the request with the v1 API version is obtainable*/
onMounted(async () => {
  console.log(process.env.NODE_ENV);
  loading.value = true;
  try {
    // const response = await axios.get('http://localhost:3000/api/today');
      const response = await axios.get('https://shop-assistant-backend.vercel.app/api/today');
      originalProducts.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;

  }
  filteredProducts.value = originalProducts.value;
});

/** filters the products according to markets */
function handleFilteredProducts(filtered: []) {
  filteredProducts.value = filtered;
}
</script>

<template>
  <HeroImage />
  <Heading headingText="Offer of the day" />
  <div class="flex-container">
    <SearchBar homepage />
    <Filter :originalProducts="originalProducts" :type="ProductTypes.default" @filtered="handleFilteredProducts" />
  </div>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ProductContainer v-if="filteredProducts.length > 0" :type="ProductTypes.default"
        :data="{ products: filteredProducts }" />
      <div v-else>Keine Produkte gefunden.</div>
    </div>
  </main>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
}

@media (min-width: 600px) {
  .flex-container {
    flex-direction: row;
    align-items: center;
  }
}
</style>

