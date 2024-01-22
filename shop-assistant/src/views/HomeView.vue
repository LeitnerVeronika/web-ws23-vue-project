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
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/api/today');
    originalProducts.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;

  }
  filteredProducts.value = originalProducts.value;
  console.log(filteredProducts);
});



function handleFilteredProducts(filtered) {
  filteredProducts.value = filtered;
}
</script>


<template>
  <HeroImage />
  <div class="content">
    <div class="flex-container">
      <Heading headingText="Offer of the day" />
      <SearchBar homepage/>
      <Filter :originalProducts="originalProducts" :type="ProductTypes.default" @filtered="handleFilteredProducts" />
    </div>
  </div>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ProductContainer v-if="filteredProducts.length > 0"
                        :type="ProductTypes.default"
                        :data="{ products: filteredProducts }" />
      <div v-else>Keine Produkte gefunden.</div>
    </div>
  </main>
</template>

