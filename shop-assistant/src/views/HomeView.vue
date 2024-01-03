<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import ProductTypes from "../components/enums/ProductTypes";
import ProductContainer from "@/components/ProductContainer.vue";
import axios from "axios";
import {onMounted, ref} from "vue";

const products = ref(null);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/api/today');
    products.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;
  }
});

</script>

<template>
  <Navigation/>
  <main>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-if="products !== null">
        <ProductContainer :type="ProductTypes.default" :data="{products}" :search="false"/>
      </div>
    </div>
  </main>
</template>

<!--
  Buttons
  <Button
        :iconPrefix="'fas'"
        :iconName="'cart-plus'"
        :clickHandler="handleCustomClick"
  />


  <script setup>
  import Button from "@/components/Button.vue";

  const handleCustomClick = () => {
    // add logic for button click
    console.log('Custom function has been called!');
  };
  </script>

-->

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
  <Market :text="'Billa'" :class-productName="'billa'" />
  <Market :text="'Spar'" :class-productName="'spar'" />
  <Market :text="'dm'" :class-productName="'dm'" />
  <Market :text="'Bipa'" :class-productName="'bipa'" />
  <Market :text="'Hofer'" :class-productName="'hofer'" />
  <Market :text="'Lidl'" :class-productName="'lidl'" />
  <Market :text="'Metro'" :class-productName="'metro'" />
  <Market :text="'MPreis'" :class-productName="'mpreis'" />
  <Market :text="'Müller'" :class-productName="'mueller'" />
  <Market :text="'Penny'" :class-productName="'penny'" />
  <Market :text="'Unimarkt'" :class-productName="'unimarkt'" />
  <Market :text="'Rewe'" :class-productName="'rewe'" />
-->