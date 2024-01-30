import { reactive} from 'vue'
import { defineStore } from 'pinia'

/** this store is used
 *  by the ProductContainer component to add/remove a product into the localStorage and
 *  to show the products in the cartView */
export const useCartStore = defineStore('cart ', () => {
  const products: Product[] = reactive([]);

  function addProduct(data: Product) {
    products.push(data)
    localStorage.setItem('cart', JSON.stringify(products));
  }
  function removeProduct(data: Product){
    products.forEach( (item, index) => {
      if (item.name == data.name) {
        products.splice(index, 1)
      }
    });
    localStorage.setItem('cart', JSON.stringify(products));
  }

  return { products, addProduct, removeProduct}
})
