<script setup lang="ts">


import type {PropType} from "vue";
import type ProductTypes from "@/components/enums/ProductTypes";
import type MarketTypes from "@/components/enums/MarketTypes";
import Market from "@/components/Market.vue";
import Button from "@/components/Button.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  market: {
    type: Number as PropType<MarketTypes>,
    required: true
  },
  priceNew: {
    type: Number,
    required: true
  },
  priceOld: {
    type: Number,
    required: true
  },
  difference: {
    type: String,
    required: true
  },
  type: {
    type: Number as PropType<ProductTypes>,
    required: false
  },
  search: {
    type: Boolean,
    required: false
  },
  diffColor: {
    type: String,
    required: false,
  }
})


</script>
<template>
  <section class="grid-container">
    <router-link class="product-link" :to="'/product/' + name + '?market=' + market + '&productName=' + name">
      <h2 class="table-productName">{{ name }}</h2>
    </router-link>
    <Market :text="market"/>
    <div v-if="search">
      {{ priceNew }}€<span v-if="difference !== 0">  |  <s>{{ priceOld }}€ </s></span>
    </div>
    <div v-else>
      {{ priceNew }}<span v-if="difference !== 0">  |  <s>{{ priceOld }}</s></span>
    </div>
    <div v-if="search">
      <div :class="[diffColor]">{{ difference }} %</div>
    </div>
    <div v-else>
      <div :class="[diffColor]">{{ difference }}</div>
    </div>
    <div v-if="type == 1">
      <font-awesome-icon :icon="['fas', 'star']"/>

      <Button
          :iconPrefix="'fas'"
          :iconName="'cart-plus'"
      />
      <font-awesome-icon :icon="['fas', 'star']"/>
      <!--      <IconFavorites/>-->
      <!--      <IconDelete/>-->
    </div>
    <div v-else>
      <!--      <IconCart/>-->

      <Button
          :iconPrefix="'fas'"
          :iconName="'star'"
      />

      <!--      <Button-->
      <!--          :iconPrefix="'fas'"-->
      <!--          :iconName="'cart-plus'"-->
      <!--      <font-awesome-icon :icon="['fas', 'star']" />-->
      <!--      <IconFavorites/>-->
    </div>
  </section>

</template>

<style scoped>
.grid-container {
  display: grid;
  gap: 50px;
  grid-template-columns: 4fr 0.5fr 1fr 1fr 0.5fr;
}

.table-productName {
  color: var(--color-primary);
}

.red {
  color: darkred;
}

.green {
  color: darkgreen;
}

.product-link {
  font-size: medium;
  margin: 0;
}
</style>