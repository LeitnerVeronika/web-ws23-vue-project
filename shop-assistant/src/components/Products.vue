<script setup lang="ts">


import type { PropType} from "vue";
import type ProductTypes from "@/components/enums/ProductTypes";
import type MarketTypes from "@/components/enums/MarketTypes";
import IconMarket from "@/components/icons/IconMarket.vue";
import IconCart from "@/components/icons/IconCart.vue";
import IconFavorites from "@/components/icons/IconFavorites.vue";
import IconAlert from "@/components/icons/IconAlert.vue";
import IconDelete from "@/components/icons/IconDelete.vue";

defineProps({
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
    type: Number,
    required: true
  },
  type: {
    type: Number as PropType<ProductTypes>,
    required: false
  },
})
</script>

<template>
  <section class="grid-container">
    <router-link class="product-link" :to="'/product/' + name">
      <h2 class="table-productName">{{name}}</h2>
    </router-link>
    <IconMarket name="{{market}}"/>
    <div>
      {{priceNew}}€ | <s>{{priceOld}}€</s>
    </div>
    <div v-if="difference >= 0" class="neg-dif">{{difference}}%</div>
    <div v-if="difference < 0" class="pos-dif">{{difference}}%</div>
    <div v-if="type == 1">
      <IconFavorites/>
      <IconCart/>
      <IconAlert/>
    </div>
    <div v-else-if="type == 2">
      <IconFavorites/>
      <IconDelete/>
    </div>
    <div v-else>
      <IconCart/>
      <IconFavorites/>
    </div>
  </section>

</template>

<style scoped>
.grid-container {
  display: grid;
  gap: 50px;
  grid-template-columns: 4fr 0.5fr 1fr 1fr 0.5fr;
}
.table-productName{
  color: var(--color-primary);
}
.neg-dif{
  color: darkred;
}

.pos-dif{
  color: darkgreen;
}
.product-link{
  font-size: medium;
  margin: 0;
}
</style>