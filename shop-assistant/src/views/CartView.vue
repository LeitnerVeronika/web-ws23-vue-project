<script setup lang="ts">
import ProductTypes from "@/components/enums/ProductTypes";
import ProductContainer from "@/components/ProductContainer.vue";


/** loads data for the cart from the local storage which is than displayed */
let localStore = localStorage.getItem('cart');
let products: [];
if(localStore !== null) {
  products = JSON.parse(localStore);
}

</script>


<template>
  <ProductContainer :type="ProductTypes.cart" :data="{products}"/>
</template>

<style>
</style>
