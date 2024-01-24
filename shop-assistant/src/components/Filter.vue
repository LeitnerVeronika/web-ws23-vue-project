<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {ref, watch, defineProps} from 'vue';
import type {PropType} from 'vue'
import axios from 'axios';
import Market from './Market.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ProductTypes from "@/components/enums/ProductTypes";
import type MarketTypes from "@/components/enums/MarketTypes";

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

const markets = ref([]);
const selectedOptions = ref([]);
const isOpen = ref(false);
const iconPrefix = 'fas';


async function fetchMarkets() {
  try {
    const response = await axios.get('http://localhost:3000/api/search/markets');
    markets.value = response.data.map((market: MarketTypes) => ({
      ...market,
      marketName: market.marketName.toUpperCase()
    }));
  } catch (error) {
    console.error('Fehler beim Abrufen der Märkte:', error);
  }
}

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function getMarketDisplayName(marketName: string) {
  return marketName.toLowerCase() === 'mueller' ? 'Müller' : marketName;
}

function updateSelectedMarkets() {
  emit('update:selected', selectedOptions.value);
  filterProducts();
}

function filterProducts() {
  let tempFilteredProducts = [];

  if (selectedOptions.value.length > 0) {
    if ((props.type == ProductTypes.cart)||(props.type == ProductTypes.favorites)) {
      console.log(props.originalProducts);
      console.log(selectedOptions.value);
      tempFilteredProducts = props.originalProducts.filter((product: any) =>
          selectedOptions.value.includes((product as any).market)
      );
    }else {
      tempFilteredProducts = props.originalProducts.filter((product: any) =>
          selectedOptions.value.includes((product as any).productMarket)
      );
    }
  } else {
    tempFilteredProducts = props.originalProducts;
  }
  emit('filtered', tempFilteredProducts);
  console.log(tempFilteredProducts)
}

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
      <div v-for="market in markets" :key="market.marketName" class="market-item">
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
  background-color: white;
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
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
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
