<script setup lang="ts">

import {useFavoriteStore} from "@/stores/favorites";
import Navigation from "@/components/Navigation.vue";
import ProductContainer from "@/components/ProductContainer.vue";
import ProductTypes from "@/components/enums/ProductTypes";

const store = useFavoriteStore();
const products = store.products;

</script>
<template>
  <Navigation/>
  <ProductContainer :type="ProductTypes.default" :data="{products}" :search="false"/>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
