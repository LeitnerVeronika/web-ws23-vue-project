<script setup lang="ts">
import ProductContainer from "@/components/ProductContainer.vue";
import ProductTypes from "@/components/enums/ProductTypes";


/** loads data for the favorites from the local storage which is than displayed */
let localStore = localStorage.getItem('favorites');
let products: [];
if(localStore !== null) {
    products = JSON.parse(localStore);
}


</script>
<template>
  {{products}}
  <ProductContainer :type="ProductTypes.favorites" :data="{products}"/>
</template>

<style>

</style>
