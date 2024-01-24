<script setup lang="ts">
import ProductTypes from "@/components/enums/ProductTypes";
import axios from "axios";
import { onMounted, ref } from "vue";
import ProductContainer from "@/components/ProductContainer.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useRoute } from "vue-router";
import Filter from '@/components/Filter.vue';

const data = ref(null);
const filteredProducts = ref([]);
const loading = ref(false);
const error = ref(null);
let products = ref(null);
let searchString = ref('');

const route = useRoute();
searchString = route.query.query;



onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/api/search?productName=' + searchString);
    data.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;
    products = data.value.products;
  }
  filteredProducts.value = products.value;
  console.log(filteredProducts);
});

const searchForProducts = (search) => {
  searchString = search;
  performSearch()
}

const performSearch = (async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/api/search?productName=' + searchString);
    data.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;
    products = data.value.products;
  }
  filteredProducts.value = products.value;
  console.log(filteredProducts);
});

function handleFilteredProducts(filtered) {
  filteredProducts.value = filtered;
}

</script>

<template>
  <div class="flex-container">
    <SearchBar @search="searchForProducts" />
    <Filter :originalProducts="products" :type="ProductTypes.search" @filtered="handleFilteredProducts" />
  </div>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ProductContainer v-if="!filteredProducts" :type="ProductTypes.search" :data="{ products }" />
      <ProductContainer v-if="filteredProducts" :type="ProductTypes.search" :data="{ products: filteredProducts }" />

      <div v-else>Keine Produkte gefunden.</div>
    </div>
  </main>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
}

@media (min-width: 600px) {
  .flex-container {
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 1rem;
  }
}
</style>