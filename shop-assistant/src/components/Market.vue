<script setup lang="ts">

import {watchEffect} from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
});

let className = props.text?.toLowerCase()


/** changes the css-class for removed products
 *  without this the classes doesn't change for removed products in the Cart/FavoritesView leading to wrong styles */
watchEffect(() => {
  className = props.text?.toLowerCase()
});
</script>

<template>
  <div class="market-container" :class="className">
    {{text}}
  </div>
</template>

<style scoped>
.market-container {
  width: 6.3em;
  max-height: 1.9em;
  text-align: center;
  padding: 2px;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: white;
  border-radius: 8px;
}
@media (min-width: 1024px) {
  .market-container {
    font-size: 1rem;
  }
}

.billa {
  background-color: #F6BE00;
}

.spar {
  background-color: #FF0000;
}

.dm {
  background-color: #800080;
}

.bipa {
  background-color: #FF00FF;
}

.hofer {
  background-color: #ADD8E6;
}

.lidl {
  background-color: #8800FF;
}

.metro {
  background-color: #0000FF;
}

.mpreis {
  background-color: #8B0000;
}

.müller {
  background-color: #FFA500;
}

.penny {
  background-color: #0D6EFD;
}

.unimarkt {
  background-color: #008000;
}

.rewe {
  background-color: #8B0000;
}

.aldinordde {
  background-color: #00008B;
}
</style>