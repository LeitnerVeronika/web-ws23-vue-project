<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {ref, watch, defineProps} from 'vue';
import type {PropType} from 'vue';
import axios from 'axios';
import Market from './Market.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ProductTypes from "@/components/enums/ProductTypes";


const props = defineProps({
  type: {
    type: Number as PropType<ProductTypes>,
    required: true
  },
  originalProducts: {
    type: Array,
    required: true
  },
});


const emit = defineEmits(['update:selected', 'filtered']);


const markets = ref<Market[]>([]);
const selectedOptions = ref<any[]>([]);
const isOpen = ref(false);
const iconPrefix = 'fas';

/** function to fetch markets */
async function fetchMarkets() {
  try {
    const response = await axios.get('https://shop-assistant-backend.vercel.app/api/markets');
    markets.value = response.data.map((market: Market) => ({
      ...market,
      marketName: market.marketName.toUpperCase()
    }));
  } catch (error) {
    console.error('Error fetching markets:', error);
  }
}

/** Function to toggle the state of dropdown */
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

/** Function to get display name for a market */
function getMarketDisplayName(marketName: string) {
  return marketName.toLowerCase() === 'mueller' ? 'Müller' : marketName;
}

/** Function to update the selected markets and filter products */
function updateSelectedMarkets() {
  emit('update:selected', selectedOptions.value);

  filterProducts();
}

/** Function to filter the products based on selected filter options */
function filterProducts() {
  let tempFilteredProducts = [];

  if (selectedOptions.value.length > 0) {
    tempFilteredProducts = props.originalProducts.filter((product) => {
      if (selectedOptions.value.includes('MUELLER')) {
        return product.productMarket === 'MüLLER';
      } else {
        return selectedOptions.value.includes(product.productMarket);
      }
    });
  } else {
    tempFilteredProducts = props.originalProducts;
  }
  emit('filtered', tempFilteredProducts);
}

/** Watching selectedOptions for changes, and calling updateSelectedMarkets when it changes */
watch(selectedOptions, updateSelectedMarkets);


fetchMarkets();
</script>


<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-button">
      {{ selectedOptions.length }} Filter
      <font-awesome-icon :icon="[iconPrefix, isOpen ? 'angle-up' : 'angle-down']" class="button-icon" />
    </button>
    <div v-if="isOpen" class="dropdown-menu">
      <div v-for="(market, index) in markets" :key="index" class="market-item">
        <input
            type="checkbox"
            :id="'market-' + (market as any).marketName"
            :value="(market as any).marketName"
            v-model="selectedOptions"
        >
        <Market :text="getMarketDisplayName((market as any).marketName)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  top: -12px;
  display: inline-block;
}
@media (min-width: 600px) {
  .dropdown {
    margin-left: 1.3rem;
  }
}

.dropdown-button {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1em;
  border: 3px solid var(--color-primary);
  border-radius: 5px;
  padding: 0.4em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: var(--color-background);
  color: var(--color-text);
  box-sizing: border-box;
  min-width: 200px;
}

.button-icon {
  margin-left: auto;
}

.dropdown-menu {
  position: absolute;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background-color: var(--color-background);
  padding: 10px;
  border-radius: 5px;
  border: 2px solid var(--color-primary);
  margin-top: 3px;
}

.market-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.market-item input[type="checkbox"] {
  margin-right: 10px;
}
</style>
