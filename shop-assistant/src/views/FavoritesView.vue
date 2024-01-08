<script setup lang="ts">

import {useFavoriteStore} from "@/stores/favorites";
import Navigation from "@/components/Navigation.vue";
import ProductContainer from "@/components/ProductContainer.vue";
import ProductTypes from "@/components/enums/ProductTypes";
import {ref} from "vue";

let localStore = localStorage.getItem('favorites');
let products = JSON.parse(localStore);
const store = useFavoriteStore();

function deleteStorage(){
  store.deleteStorage();
}

</script>
<template>
  <Navigation/>
  <ProductContainer :type="ProductTypes.favorites" :data="{products}"/>
  <button @click="deleteStorage()">Clear Favorites</button>

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
