<script setup lang="ts">
import ProductContainer from "@/components/ProductContainer.vue";
import ProductTypes from "@/components/enums/ProductTypes";

let localStore = localStorage.getItem('favorites');
let products: [];
if(localStore !== null) {
    products = JSON.parse(localStore);
}


</script>
<template>
  <ProductContainer :type="ProductTypes.favorites" :data="{products}"/>
</template>

<style>

</style>
