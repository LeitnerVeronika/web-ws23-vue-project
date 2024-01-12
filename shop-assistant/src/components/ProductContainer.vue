<script setup lang="ts">

import Products from "@/components/Products.vue";
import ProductTypes from "@/components/enums/ProductTypes";
import TableHeader from "@/components/TableHeader.vue";
import type {PropType} from "vue";
import {onMounted, ref} from "vue";

const props = defineProps({
  type: {
    type: Number as PropType<ProductTypes>,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
});

const products = ref([]);

// Function to update products from localStorage
const updateFavoriteProductsFromLocalStorage = () => {
  if (props.type == ProductTypes.favorites) {
    let localStore = localStorage.getItem('favorites');
    products.value = JSON.parse(localStore) || [];
  }
};

// On component mount, update products from localStorage
onMounted(() => {
  updateFavoriteProductsFromLocalStorage();
});

const handleFavRemove = () => {
  updateFavoriteProductsFromLocalStorage()
};

const updateCartProductsFromLocalStorage = () => {
  if (props.type == ProductTypes.cart) {
    let localStore = localStorage.getItem('cart');
    products.value = JSON.parse(localStore) || [];
  }
};

// On component mount, update products from localStorage
onMounted(() => {
  updateCartProductsFromLocalStorage();
});

const handleCartRemove = () => {
  updateCartProductsFromLocalStorage()
};

const handleCheck = (prodName, isChecked) => {
  products.value.forEach( (item, index) => {
    if(item.name == prodName){
      products.value[index].isChecked = isChecked
    }
  });
};

</script>

<template>
  <section class="product-table">
    <TableHeader/>
    <Products v-if="type == ProductTypes.search" v-for="product in data.products" :difference="product.differencePercent"
              :price-new="product.currentPrice" :price-old="product.previousPrice" :market="product.productMarket"
              :name="product.productName" :type="type" :search="search" :diffColor="product.differenceColor" />
    <Products v-else-if="type == ProductTypes.favorites" v-for="product in products" :difference="product.difference"
              :price-new="product.priceNew" :price-old="product.priceOld"
              :market="product.market" :name="product.name" :type="type" :diffColor="product.diffColor" @remove="handleFavRemove"/>
    <Products v-else-if="type == ProductTypes.cart" v-for="product in products" :difference="product.difference"
              :price-new="product.priceNew" :price-old="product.priceOld"
              :market="product.market" :name="product.name" :type="type" :diffColor="product.diffColor" :is-checked="product.isChecked" @remove="handleCartRemove" @checked="handleCheck"/>
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