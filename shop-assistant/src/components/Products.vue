<script setup lang="ts">
import type { PropType } from 'vue'
import ProductTypes from '@/components/enums/ProductTypes'
import Market from '@/components/Market.vue'
import Button from '@/components/Button.vue'
import { useFavoriteStore } from '@/stores/favorites'
import { useCartStore } from '@/stores/shoppingcart'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  market: {
    type: String,
    required: true
  },
  priceNew: {
    type: String,
    required: true
  },
  priceOld: {
    type: String,
    required: true
  },
  difference: {
    type: String,
    required: true
  },
  type: {
    type: Number as PropType<ProductTypes>,
    required: true
  },
  diffColor: {
    type: String,
    required: false
  },
  isChecked: {
    type: Boolean,
    required: false
  }
})

const emit = defineEmits()
const favStore = useFavoriteStore()

function addToFavorites() {
  favStore.addProduct(props)
}

/** remove product from store and triggers a custom event named 'remove' to dynamically load products */
const removeFromFavorites = () => {
  favStore.removeProduct(props)
  emit('removeFav')
}

const cartStore = useCartStore()

function addToCart() {
  cartStore.addProduct(props)
}

/** remove product from store and triggers a custom event named 'remove' to dynamically load products */
const removeFromCart = () => {
  cartStore.removeProduct(props)
  emit('removeCart')
}

/** is called on change event of the checkbox and triggers a custom event named 'checked' to update the product props inside the ProductContainer */
const updateChecked = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (props.isChecked === undefined) {
    return;
  }
  emit('checked', props.name, target.checked);
};

</script>
<template>
  <section class="grid-container" :class="{ crossed: isChecked }">
    <input v-if="type == 2" type="checkbox" :checked="isChecked" @change="updateChecked($event)"/>
    <div v-else></div>
    <router-link
      class="product-link"
      :to="'/product/' + name + '?market=' + market + '&productName=' + name"
    >
      <h2 class="table-productName">{{ name }}</h2>
    </router-link>
    <Market :text="market" />
    <div class="price" v-if="!priceOld.toString().includes('€')">
      {{ priceNew }}€<span v-if="difference !== 0">
        | <s>{{ priceOld }}€ </s></span
      >
    </div>
    <div class="price" v-else>
      {{ priceNew
      }}<span v-if="difference !== 0">
        | <s>{{ priceOld }}</s></span
      >
    </div>
    <div v-if="!difference.toString().includes('%')">
      <div :class="[diffColor]">{{ difference }} %</div>
    </div>
    <div v-else>
      <div :class="[diffColor]">{{ difference }}</div>
    </div>
    <!-- different icons for the different pages -->
    <div v-if="type == 1">
      <Button
        data-testid="fav-item"
        :iconPrefix="'fas'"
        :iconName="'star'"
        :click-handler="removeFromFavorites"
      />
      <Button :iconPrefix="'fas'" :iconName="'cart-plus'" :click-handler="addToCart" />
    </div>
    <div v-else-if="type == 2">
      <Button :iconPrefix="'far'" :iconName="'star'" :click-handler="addToFavorites" />
      <Button
        data-testid="cart-item"
        :iconPrefix="'fas'"
        :iconName="'xmark'"
        :click-handler="removeFromCart"
      />
    </div>
    <div v-else>
      <Button
        data-testid="add-cart-item"
        :iconPrefix="'fas'"
        :iconName="'cart-plus'"
        :click-handler="addToCart"
      />
      <Button
        data-testid="add-fav-item"
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
  gap: 30px;
  grid-template-columns: 0.1fr 4fr 0.5fr 1fr 1fr 0.5fr;
}

.crossed {
  text-decoration: line-through;
}

.table-productName {
  color: var(--color-primary);
}

.product-link {
  font-size: medium;
  margin: 0;
}

/** classes dynamically match to differentColor */
.red {
  color: darkred;
}

.green {
  color: darkgreen;
}

.product-link {
  font-size: x-small;
  margin: 0;
}

.price {
  font-size: small;
}

@media (min-width: 1024px) {
  .product-link {
    font-size: medium;
  }

  .grid-container {
    gap: 50px;
  }

  .price {
    font-size: medium;
  }
}
</style>