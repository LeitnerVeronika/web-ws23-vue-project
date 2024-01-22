<script setup lang="ts">
  import ProductTypes from "@/components/enums/ProductTypes";
  const markets = "spar,billa"
  import axios from "axios";
  import {onMounted, ref} from "vue";
  import ProductContainer from "@/components/ProductContainer.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import {useRoute} from "vue-router";
  import Filter from '@/components/Filter.vue';

  const data = ref(null);
  const filteredProducts = ref([]);
  const loading = ref(false);
  const error = ref(null);
  let products = ref(null);
  let searchString = ref('semmel');

  const route = useRoute();
  searchString = route.query.query;



  onMounted(async () => {
    loading.value = true;
    try {
      const response = await axios.get('http://localhost:3000/api/search?productName=' + searchString +'&markets=' + markets);
      data.value = response.data;
    } catch (err) {
      error.value = 'Error fetching data';
    } finally {
      loading.value = false;
      products = data.value.products;
    }
  });

  const searchForProducts = (search) => {
    searchString = search;
    performSearch()
  }

  const performSearch = (async () => {
    loading.value = true;
    try {
      const response = await axios.get('http://localhost:3000/api/search?productName=' + searchString +'&markets=' + markets);
      data.value = response.data;
    } catch (err) {
      error.value = 'Error fetching data';
    } finally {
      loading.value = false;
      products = data.value.products;
    }
  });

  function handleFilteredProducts(filtered) {
    filteredProducts.value = filtered;
  }

</script>

<template>
  <SearchBar @search="searchForProducts"/>
  <Filter :originalProducts="products" :type="ProductTypes.search" @filtered="handleFilteredProducts" />
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div v-if="data !== null">
      <div v-if="filteredProducts && filteredProducts.length > 0">
        <ProductContainer :key="filteredProducts.length" :type="ProductTypes.search" :data="{products: filteredProducts}" />
      </div>
      <div v-else-if="filteredProducts.length == 0">
        <ProductContainer :type="ProductTypes.search" :data="{products}" />
      </div>
    </div>
    <div v-else>Keine Produkte gefunden.</div>
  </div>
</template>

<style scoped>

</style>