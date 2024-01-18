<script setup lang="ts">
import type {PropType} from "vue";
import {ref, watch} from "vue";
import ProductTypes from "@/components/enums/ProductTypes";
import type MarketTypes from "@/components/enums/MarketTypes";
import Market from "@/components/Market.vue";
import Button from "@/components/Button.vue";
import {useFavoriteStore} from "@/stores/favorites";
import {useCartStore} from "@/stores/shoppingcart";

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
  diffColor: {
    type: String,
    required: false,
  },
  isChecked: {
    type: Boolean,
    required: false
  }
})

const favStore = useFavoriteStore();
const emit = defineEmits();
let isCheckedComp = ref()

function addToFavorites() {
  favStore.addProduct(props)
}

const removeFromFavorites = () => {
  favStore.removeProduct(props)
  // Trigger a custom event named 'remove'
  emit('remove');
};

const cartStore = useCartStore();

function addToCart() {
  console.log("Add Cart")
  cartStore.addProduct(props)

}

const removeFromCart = () => {
  cartStore.removeProduct(props)
  // Trigger a custom event named 'remove'
  emit('remove');
};

watch(isCheckedComp, () => {
  emit('checked', props.name, isCheckedComp.value)
})

</script>
<template>
  <section class="grid-container" :class="{crossed: isChecked}">
    <input v-if="type == ProductTypes.cart" type="checkbox" v-model="isCheckedComp"/>
    <div v-else></div>
    <router-link class="product-link" :to="'/product/' + name + '?market=' + market + '&productName=' + name">
      <h2 class="table-productName">{{ name }}</h2>
    </router-link>
    <Market :text="market"/>
    <div v-if="!priceOld.toString().includes('€')">
      {{ priceNew }}€<span v-if="difference !== 0">  |  <s>{{ priceOld }}€ </s></span>
    </div>
    <div v-else>
      {{ priceNew }}<span v-if="difference !== 0">  |  <s>{{ priceOld }}</s></span>
    </div>
    <div v-if="!difference.toString().includes('%')">
      <div :class="[diffColor]">{{ difference }} %</div>
    </div>
    <div v-else>
      <div :class="[diffColor]">{{ difference }}</div>
    </div>
    <div v-if="type == ProductTypes.favorites">
      <Button
          :iconPrefix="'fas'"
          :iconName="'star'"
          :click-handler="removeFromFavorites"/>
      <Button
          :iconPrefix="'fas'"
          :iconName="'cart-plus'"
          :click-handler="addToCart"
      />
    </div>
    <div v-else-if="type == ProductTypes.cart">
      <Button
          :iconPrefix="'far'"
          :iconName="'star'"
          :click-handler="addToFavorites"
      />
      <Button
          :iconPrefix="'fas'"
          :iconName="'xmark'"
          :click-handler="removeFromCart"
      />
    </div>
    <div v-else>
      <Button
          :iconPrefix="'fas'"
          :iconName="'cart-plus'"
          :click-handler="addToCart"
      />
      <Button
          :iconPrefix="'far'"
          :iconName="'star'"
          :click-handler="addToFavorites"
      />
    </div>
  </section>

</template>

<style scoped>
.grid-container {
  display: grid;
  gap: 50px;
  grid-template-columns: 0.1fr 4fr 0.5fr 1fr 1fr 0.5fr;
}

.crossed {
  text-decoration: line-through;
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