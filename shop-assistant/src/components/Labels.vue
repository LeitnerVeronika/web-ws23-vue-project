<script setup lang="ts">

import {watchEffect} from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
});

let className = props.text?.toLowerCase()

/** used to update the css class for product updates (on remove from cart / favorites) */
watchEffect(() => {
  className = props.text?.toLowerCase()
});
</script>

<template>
  <div class="label-container" :class="className">
    {{text}}
  </div>
</template>

<style scoped>
.label-container {
  max-width: 130px;
  min-width: 110px;
  max-height: 30px;
  text-align: center;
  padding: 2px;
  text-transform: uppercase;
  color: white;
  border-radius: 8px;
}

 /** classes dynamically match to title */
.vegetarisch {
  background-color: #F6BE00;
}

.bio {
  background-color: #800080;
}

.glutenfrei {
  background-color: #8B0000;
}

.laktosefrei {
  background-color: #0D6EFD;
}

.vegan {
  background-color: #008000;
}

</style>