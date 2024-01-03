<script setup lang="ts">

import Products from "@/components/Products.vue";
import ProductTypes from "@/components/enums/ProductTypes";
import TableHeader from "@/components/TableHeader.vue";
import type {PropType} from "vue";

defineProps({
  type: {
    type: Number as PropType<ProductTypes>,
    required: true
  },
  data:{
    type: Object,
    required: true
  },
  search:{
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <section class="product-table">
    <TableHeader/>
    <Products v-if="search" v-for="product in data.products" :difference="product.differenceString" :price-old="product.previousPrice"
              :price-new="product.currentPrice" :market="product.productMarket" :name="product.productName" :type="type" :search="search"/>
    <Products v-else v-for="product in data.products" :difference="product.priceDiffPercent" :price-old="product.priceBefore"
              :price-new="product.priceAfter" :market="product.productMarket" :name="product.productName" :type="type"/>
  </section>
</template>

<style scoped>
.product-table{
  margin: 0 1.3em;
}
</style>