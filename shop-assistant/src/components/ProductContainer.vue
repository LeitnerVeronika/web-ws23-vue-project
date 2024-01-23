<script setup lang="ts">

import Products from "@/components/Products.vue";
import ProductTypes from "@/components/enums/ProductTypes";
import TableHeader from "@/components/TableHeader.vue";
import type {PropType} from "vue";
import {onMounted, ref, watch, watchEffect} from "vue";

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
const sortValue = ref('');


watch(() => props.data.products, (newProducts) => {
  products.value = Array.isArray(newProducts) ? newProducts : [];
}, { immediate: true });


onMounted(() => {
  products.value = [...props.data.products];
  console.log('product container: ', products.value);
});

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
    products.value.sort((a, b) => a.market.localeCompare(b.market));
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

const handleSortEvent = (value) => {
  sortValue.value = value;
  sortProducts();
};

const sortProducts = () => {
  if (sortValue.value) {
    let sortField = (props.type === ProductTypes.cart || props.type === ProductTypes.favorites) ? 'name' : 'productName';
    let priceField;
    if (props.type === ProductTypes.cart || props.type === ProductTypes.favorites) {
      priceField = 'priceNew';
    } else {
      priceField = (props.type === ProductTypes.search) ? 'currentPrice' : 'priceAfter';
    }


    if (sortValue.value.includes('name')) {
      products.value = [...products.value].sort((a, b) => {
        let fa = a[sortField].toLowerCase(), fb = b[sortField].toLowerCase();
        return (sortValue.value === 'name-up') ? fa.localeCompare(fb) : fb.localeCompare(fa);
      });
    } else if (sortValue.value.includes('price')) {
      products.value = [...products.value].sort((a, b) => {
        let fa = parseFloat(a[priceField].toString().replace(/[^0-9.,]/g, '').replace(',', '.'));
        let fb = parseFloat(b[priceField].toString().replace(/[^0-9.,]/g, '').replace(',', '.'));
        return (sortValue.value === 'price-up') ? fa - fb : fb - fa;
      });
    }

  }
};



</script>

<template>
  <section class="product-table">
    <TableHeader @sortEvent="handleSortEvent" />
    <Products v-if="type == ProductTypes.search" v-for="product in products" :difference="product.differencePercent"
              :price-new="product.currentPrice" :price-old="product.previousPrice" :market="product.productMarket"
              :name="product.productName" :type="type" :search="search" :diffColor="product.differenceColor" />
    <Products v-else-if="type == ProductTypes.favorites" v-for="product in products" :difference="product.difference"
              :price-new="product.priceNew" :price-old="product.priceOld"
              :market="product.market" :name="product.name" :type="type" :diffColor="product.diffColor" @remove="handleFavRemove"/>
    <Products v-else-if="type == ProductTypes.cart" v-for="product in products" :difference="product.difference"
              :price-new="product.priceNew" :price-old="product.priceOld"
              :market="product.market" :name="product.name" :type="type" :diffColor="product.diffColor" :is-checked="product.isChecked" @remove="handleCartRemove" @checked="handleCheck"/>
    <Products v-else v-for="product in products" :difference="product.priceDiffPercent"
              :price-new="product.priceAfter" :price-old="product.priceBefore"
              :market="product.productMarket" :name="product.productName" :type="type" :diffColor="product.color"/>
  </section>
</template>

<style scoped>
.product-table {
  margin: 0;
  font-family: 'DM Serif Display', sans-serif;
}
@media (min-width: 460px) {
  .product-table {
    margin: 0 1.3em;
  }
}
</style>