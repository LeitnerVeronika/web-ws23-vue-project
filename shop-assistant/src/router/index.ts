import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from "../views/FavoritesView.vue";
import CartView from "../views/CartView.vue";
import ProductPage from "@/views/ProductPage.vue";
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      productName: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      productName: 'favorites',
      component: FavoritesView
    },
    {
      path: '/cart',
      productName: 'cart',
      component: CartView
    },
    {
      path: '/productSearch',
      productName: 'productSearch',
      component: SearchView,
      props: route => ( { query: route.query.q } )
    },
    {
      path: '/product/:productName',
      productName: 'product',
      component: ProductPage
    }
  ]
})

export default router
