<script setup lang="ts">
  import ProductTypes from "@/components/enums/ProductTypes";

  const searchString = "semmel";
  const markets = "spar,billa"
  import axios from "axios";
  import {onMounted, ref} from "vue";
  import ProductContainer from "@/components/ProductContainer.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import Navigation from "@/components/Navigation.vue";

  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);
  let products = ref(null);

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

</script>

<template>
  <SearchBar/>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div v-if="data !== null">
      <ProductContainer :type="ProductTypes.default" :data="{products}" :search="true"></ProductContainer>
    </div>
  </div>
</template>

<style scoped>

</style>