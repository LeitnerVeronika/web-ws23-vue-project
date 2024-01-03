<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import MarketTypes from "@/components/enums/MarketTypes";
import ProductTypes from "../components/enums/ProductTypes";
import ProductContainer from "@/components/ProductContainer.vue";


//Output should look like this:
let products = [
  {name: 'Test Product 10g', market: MarketTypes.Billa, priceOld: 1.29, priceNew: 0.99, difference: -10},
  {name: 'Test Product 2 10g', market: MarketTypes.Billa, priceOld: 2.10, priceNew: 2.99, difference: 13}
]
let test = [{testName: 'Hi'}]

console.log(products)
</script>

<template>
  <Navigation/>
  <main>
    <ProductContainer :type="ProductTypes.default" :data="{products}"></ProductContainer>
  </main>
</template>
