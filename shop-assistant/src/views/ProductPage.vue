<script setup lang="ts">

import MarketTypes from "@/components/enums/MarketTypes";
import IconMarket from "@/components/icons/IconMarket.vue";
import HeroImage from "@/components/HeroImage.vue";
import type {PropType} from "vue";

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
  }
})

//API Request: ProductName

</script>

<template>
  <HeroImage/>
  <section>
  <h1 class="product-header">{{name}}</h1>
  <IconMarket name="{{market}}"/>
    <div>
      {{priceNew}}€ | <s>{{priceOld}}€</s>
    </div>
    <div v-if="difference >= 0" class="neg-dif">{{difference}}%</div>
    <div v-if="difference < 0" class="pos-dif">{{difference}}%</div>
  </section>
</template>

<style scoped>
.product-header{
  color: var(--color-primary);
}
.neg-dif{
  color: darkred;
}

.pos-dif{
  color: darkgreen;
}
</style>