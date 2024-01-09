import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorites ', () => {
  const products = reactive([]);

  function addProduct(data) {
    console.log("Item should be added to store: " + data);
    console.log("Item Name: " + data.name);
    products.push(data)
  }

  return { products, addProduct}
})
