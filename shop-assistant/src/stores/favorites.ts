import { reactive} from 'vue'
import { defineStore } from 'pinia'

/** this store is used
 *  by the ProductContainer component to add/remove a product into the localStorage and
 *  to show the products in the favoritesView */
export const useFavoriteStore = defineStore('favorites ', () => {
  const products: Product[] = reactive([]);

  function addProduct(data: Product) {
    products.push(data)
    localStorage.setItem('favorites', JSON.stringify(products));
  }
  function removeProduct(data: Product){
    products.forEach( (item, index) => {
      if(products.some((item) => item.name === data.name)){
        products.splice(index,1);
      }
    });
    localStorage.setItem('favorites', JSON.stringify(products));
  }

  return { products, addProduct, removeProduct}
})
