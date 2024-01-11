<script setup lang="ts">

import Products from "@/components/Products.vue";
import ProductTypes from "@/components/enums/ProductTypes";
import TableHeader from "@/components/TableHeader.vue";
import type {PropType} from "vue";
import {onMounted, ref} from "vue";

const props = defineProps({
  type: {
    type: Number as PropType<ProductTypes>,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  search: {
    type: Boolean,
    required: false
  },
  fav: {
    type: Boolean,
    required: false,
  }
});

const products = ref([]);

// Function to update products from localStorage
const updateProductsFromLocalStorage = () => {
  if (props.fav) {
    let localStore = localStorage.getItem('favorites');
    products.value = JSON.parse(localStore) || [];
  }
};

// On component mount, update products from localStorage
onMounted(() => {
  updateProductsFromLocalStorage();
});

const handleIncrement = () => {
  updateProductsFromLocalStorage()
};

</script>

<template>
  <section class="product-table">
    <TableHeader/>
    <Products v-if="search" v-for="product in data.products" :difference="product.differencePercent"
              :price-new="product.currentPrice" :price-old="product.previousPrice" :market="product.productMarket"
              :name="product.productName" :type="type" :search="search" :diffColor="product.differenceColor"/>
    <Products v-else-if="fav" v-for="product in products" :difference="product.difference"
              :price-new="product.priceNew" :price-old="product.priceOld"
              :market="product.market" :name="product.name" :type="1" :diffColor="product.diffColor" @remove="handleIncrement"/>
    <Products v-else v-for="product in data.products" :difference="product.priceDiffPercent"
              :price-new="product.priceAfter" :price-old="product.priceBefore"
              :market="product.productMarket" :name="product.productName" :type="type" :diffColor="product.color"/>
  </section>
</template>

<style scoped>
.product-table {
  margin: 0 1.3em;
}
</style>