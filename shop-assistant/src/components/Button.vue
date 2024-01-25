<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button @click="handleClick" class="custom-button">
    <font-awesome-icon :icon="[iconPrefix, iconName]" class="fa-icon" data-testid="font-awesome-icon"/>
  </button>
</template>

<script lang="ts">
import type { PropType } from 'vue';

export default {
  props: {
    iconPrefix: String,
    iconName: String,
    clickHandler: Function as PropType<() => void>,
  },
  methods: {
    handleClick(): void {
      if (this.clickHandler) {
        this.clickHandler();
      }
    },
  },
};
</script>

<style scoped>
.custom-button {
  cursor: pointer;
  border: 2px solid var(--color-primary);
  border-radius: 0.5em;
  margin: 6px;
  height: 30px;
  width: 30px;
  background-color: transparent;
}

.fa-icon{
  color: var(--color-primary)
}
</style>