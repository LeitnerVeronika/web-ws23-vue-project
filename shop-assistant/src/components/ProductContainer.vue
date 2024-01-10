<script setup lang="ts">

import Products from "@/components/Products.vue";
import ProductTypes from "@/components/enums/ProductTypes";
import TableHeader from "@/components/TableHeader.vue";
import type {PropType} from "vue";

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
});
</script>

<template>
  <section class="product-table">
    <TableHeader/>
    <Products v-if="search" v-for="product in data.products" :difference="product.differencePercent"
              :price-new="product.currentPrice" :price-old="product.previousPrice" :market="product.productMarket"
              :name="product.productName" :type="type" :search="search" :diffColor="product.differenceColor"/>
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