<script setup lang="ts">
import ProductTypes from '@/components/enums/ProductTypes'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import ProductContainer from '@/components/ProductContainer.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useRoute } from 'vue-router'
import Filter from '@/components/Filter.vue'

const data = ref({ products: [] })
const filteredProducts = ref<unknown[]>([])
const loading = ref(false)
const error = ref<null | string>(null)
let products = ref<unknown[] | null>(null)
let searchString = ref<string>('')

const route = useRoute()

/** updates the input from the URL Parameters */
watch(
  () => searchString,
  () => {
    searchString.value = (route.query.query as string) || ''
  }
)

/** load data with the productName from Preisrunter API for requests redirected from the homepage*/
onMounted(async () => {
  loading.value = true
  try {
    const response = await axios.get(
      'https://shop-assistant-backend.vercel.app/api/search?productName=' + searchString.value
    )
    data.value = response.data
  } catch (err) {
    error.value = 'Error fetching data'
  } finally {
    loading.value = false
    if (data.value !== null) {
      products.value = data.value.products
    }
  }
  if (products.value !== null) {
    filteredProducts.value = products.value
  }
})

/** handles the searchForProducts event emitted by the SearchBar Component */
const searchForProducts = (search: string) => {
  searchString.value = search
  performSearch()
}

/** search products from the Preisrunter API with productName*/
const performSearch = async () => {
  loading.value = true
  try {
    const response = await axios.get(
      'https://shop-assistant-backend.vercel.app/api/search?productName=' + searchString.value
    )
    data.value = await response.data
  } catch (err) {
    error.value = 'Error fetching data'
  } finally {
    loading.value = false
    if (data.value !== null && typeof data.value === 'object') {
      products.value = data.value.products
      filteredProducts.value = products.value
    }
  }
}

/** returns the products with market filters applied*/
function handleFilteredProducts(filtered: unknown[]) {
  filteredProducts.value = filtered
}
</script>

<template>
  <div class="flex-container">
    <SearchBar @search="searchForProducts" />
    <Filter
      :originalProducts="products || []"
      :type="ProductTypes.search"
      @filtered="handleFilteredProducts"
    />
  </div>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ProductContainer v-if="!filteredProducts" :type="ProductTypes.search" :data="{ products }" />
      <ProductContainer
        v-if="filteredProducts"
        :type="ProductTypes.search"
        :data="{ products: filteredProducts }"
      />
      <div v-else>Keine Produkte gefunden.</div>
    </div>
  </main>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
}

@media (min-width: 600px) {
  .flex-container {
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 1rem;
  }
}
</style>