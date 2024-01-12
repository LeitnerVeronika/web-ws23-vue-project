import { reactive} from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart ', () => {
  const products = reactive([]);

  function addProduct(data) {
    products.push(data)
    localStorage.setItem('cart', JSON.stringify(products));
  }
  function removeProduct(data){
    products.forEach( (item, index) => {
      if(item.name == data.name){
        products.splice(index,1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(products));
  }

  return { products, addProduct, removeProduct}
})
