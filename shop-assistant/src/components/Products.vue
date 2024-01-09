<script setup lang="ts">


import type {PropType} from "vue";
import type ProductTypes from "@/components/enums/ProductTypes";
import type MarketTypes from "@/components/enums/MarketTypes";
import Market from "@/components/Market.vue";
// import IconMarket from "@/components/icons/IconMarket.vue";
// import IconCart from "@/components/icons/IconCart.vue";
// import IconFavorites from "@/components/icons/IconFavorites.vue";
// import IconAlert from "@/components/icons/IconAlert.vue";
// import IconDelete from "@/components/icons/IconDelete.vue";

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
  search:{
    type: Boolean,
    required:false
  }
})

let diff = props.difference
diff = diff.split(/[()]/);
let diffString = diff[1]


</script>

<template>
  <section class="grid-container">
    <router-link class="product-link" :to="'/product/' + name + '?market=' + market + '&productName=' + name">
      <h2 class="table-productName">{{ name }}</h2>
    </router-link>
    <Market :text="market"/>
    <div v-if="search">
      {{ priceNew }}€ | <s>{{ priceOld }}€</s>
    </div>
    <div v-else>
      {{ priceNew }}| <s>{{ priceOld }}</s>
    </div>
    <div v-if="search">
      <div v-if="diffString !== undefined">
      <div v-if="diffString.startsWith('-')" class="neg-dif">{{ diffString }}</div>
      <div v-if="diffString.startsWith('+')" class="pos-dif">{{ diffString }}</div>
      </div>
    </div>
      <div v-else></div>
    <div v-else>
      <div v-if="difference.startsWith('-')" class="neg-dif">{{ difference }}</div>
      <div v-if="difference.startsWith('+')" class="pos-dif">{{ difference }}</div>
    </div>
    <div v-if="type == 1">
<!--      <IconFavorites/>-->
      <font-awesome-icon :icon="['fas', 'star']" />

      <Button
          :iconPrefix="'fas'"
          :iconName="'cart-plus'"
      />
<!--      <IconCart/>-->
<!--      <IconAlert/>-->
    </div>
    <div v-else-if="type == 2">
      <font-awesome-icon :icon="['fas', 'star']" />
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
<!--      />-->
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

.neg-dif {
  color: darkred;
}

.pos-dif {
  color: darkgreen;
}

.product-link {
  font-size: medium;
  margin: 0;
}
</style>