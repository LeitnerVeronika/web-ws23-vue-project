import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorites ', () => {
  const products = reactive([]);

  function addProduct(data) {
    products.push(data)
    localStorage.setItem('favorites', JSON.stringify(products));
  }
  function removeProduct(data){
    products.pop(data);
    localStorage.setItem('favorites', JSON.stringify(products));
  }

  function deleteStorage(){
    localStorage.removeItem('favorites');
  }

  return { products, addProduct, removeProduct, deleteStorage}
})
