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
  }
})
</script>

<template>
  <section class="product-table">
    <TableHeader/>
    <Products v-for="product in data.products" :difference="product.difference" :price-old="product.priceOld"
              :price-new="product.priceNew" :market="product.market" :name="product.name" :type="type"/>
  </section>
</template>

<style scoped>
.product-table{
  margin: 0 1.3em;
}
</style>