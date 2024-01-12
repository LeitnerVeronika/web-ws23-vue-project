<script setup lang="ts">
import ProductTypes from "@/components/enums/ProductTypes";
import ProductContainer from "@/components/ProductContainer.vue";

let localStore = localStorage.getItem('cart');
let products = JSON.parse(localStore);
</script>


<template>
  <ProductContainer :type="ProductTypes.cart" :data="{products}"/>
</template>

<style>
</style>
