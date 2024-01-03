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