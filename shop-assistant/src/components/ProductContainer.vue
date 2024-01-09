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
    required: false
  },
});
</script>

<template>
  <section class="product-table">
    <TableHeader/>
    <Products v-if="search" v-for="product in data.products" :priceDiffPercent="product.differenceString" :priceBefore="product.previousPrice"
              :priceAfter="product.currentPrice" :productMarket="product.productMarket" :productName="product.productName" :type="type" :search="search"/>
    <Products v-else v-for="product in data.products" :priceDiffPercent="product.priceDiffPercent" :priceBefore="product.priceBefore"
              :priceAfter="product.priceAfter" :productMarket="product.productMarket" :productName="product.productName" :type="type"/>
  </section>
</template>

<style scoped>
.product-table{
  margin: 0 1.3em;
}
</style>