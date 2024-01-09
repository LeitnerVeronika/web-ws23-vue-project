<script setup lang="ts">


import type {PropType} from "vue";
import type ProductTypes from "@/components/enums/ProductTypes";
import type MarketTypes from "@/components/enums/MarketTypes";
import { useFavoriteStore} from "@/stores/favorites";

const props = defineProps({
  productName: {
    type: String,
    required: true
  },
  productMarket: {
    type: Number as PropType<MarketTypes>,
    required: true
  },
  priceAfter: {
    type: Number,
    required: true
  },
  priceBefore: {
    type: Number,
    required: true
  },
  priceDiffPercent: {
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


let diff = props.priceDiffPercent
diff = diff.split(/[()]/);
let diffString = diff[1]

const store = useFavoriteStore();

function addToCart(){
  console.log(props)
  store.addProduct(props);
}


</script>
<template>
  <section class="grid-container">
    <router-link class="product-link" :to="'/product/' + productName + '?productMarket=' + productMarket + '&productName=' + productName">
      <h2 class="table-productName">{{ productName }}</h2>
    </router-link>
    <Market :text="market"/>
    <div v-if="search">
      {{ priceAfter }}€ | <s>{{ priceBefore }}€</s>
    </div>
    <div v-else>
      {{ priceAfter }}| <s>{{ priceBefore }}</s>
    </div>
    <div v-if="search">
      <div v-if="diffString !== undefined">
      <div v-if="diffString.startsWith('-')" class="neg-dif">{{ diffString }}</div>
      <div v-if="diffString.startsWith('+')" class="pos-dif">{{ diffString }}</div>
      </div>
    </div>
      <div v-else></div>
    <div v-else>
      <div v-if="priceDiffPercent.startsWith('-')" class="neg-dif">{{ priceDiffPercent }}</div>
      <div v-if="priceDiffPercent.startsWith('+')" class="pos-dif">{{ priceDiffPercent }}</div>
    </div>
    <div>
      <button @click="addToCart()">Add to cart</button>
    </div>
    <div v-if="type == 1">
      <font-awesome-icon :icon="['fas', 'star']" />

      <Button
          :iconPrefix="'fas'"
          :iconName="'cart-plus'"
      />
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