<script setup lang="ts">
import HeroImage from "@/components/HeroImage.vue";
import Heading from "@/components/Heading.vue";
import SearchBar from "@/components/SearchBar.vue";
import ProductTypes from "../components/enums/ProductTypes";
import ProductContainer from "@/components/ProductContainer.vue";
import axios from "axios";
import {onMounted, ref} from "vue";

const products = ref(null);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/api/today');
    products.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;
  }
});

</script>

<template>
  <HeroImage />
  <div class="content">
    <div class="flex-container">
      <Heading headingText="Offer of the day" />
      <SearchBar homepage/>
    </div>
  </div>
  <!-- <HeroImage imgSrc="../images/strawberries.jpg"/> -->
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-if="products !== null">
        <ProductContainer :type="ProductTypes.default" :data="{products}"/>
      </div>
    </div>
  </main>
</template>
