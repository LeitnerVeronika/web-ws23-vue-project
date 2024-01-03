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

<!--
  Icons:

  <font-awesome-icon :icon="['fas', 'cart-plus']" />

  filled star = fas; unfilled star = far
  <font-awesome-icon :icon="['fas', 'star']" />
  <font-awesome-icon :icon="['far', 'star']" />

  <font-awesome-icon :icon="['fas', 'angle-down']" />
  <font-awesome-icon :icon="['fas', 'angle-up']" />
  <font-awesome-icon :icon="['fas', 'bell']" />
  <font-awesome-icon :icon="['fas', 'times']" />

-->

<!--
  Market:
  <Market :text="'Billa'" :class-name="'billa'" />
  <Market :text="'Spar'" :class-name="'spar'" />
  <Market :text="'dm'" :class-name="'dm'" />
  <Market :text="'Bipa'" :class-name="'bipa'" />
  <Market :text="'Hofer'" :class-name="'hofer'" />
  <Market :text="'Lidl'" :class-name="'lidl'" />
  <Market :text="'Metro'" :class-name="'metro'" />
  <Market :text="'MPreis'" :class-name="'mpreis'" />
  <Market :text="'Müller'" :class-name="'mueller'" />
  <Market :text="'Penny'" :class-name="'penny'" />
  <Market :text="'Unimarkt'" :class-name="'unimarkt'" />
  <Market :text="'Rewe'" :class-name="'rewe'" />
-->