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
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/productSearch',
      name: 'productSearch',
      component: SearchView,
      props: route => ( { query: route.query.q } )
    },
    {
      path: '/product/:productName',
      name: 'product',
      component: ProductPage
    }
  ]
})

export default router
