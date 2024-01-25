<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  headingText: string
}>();
</script>

<template>
<h1 class="heading1" data-testid="heading-element">{{ headingText }}</h1>
</template>

<style scoped>
.heading1 {
  font-family: 'DM Serif Display', serif;
  font-size: x-large;
  color: var(--color-primary);
  margin: 0 1rem;
}

@media (min-width: 1024px) {
  .heading1 {
    font-size: xx-large;
  }
}
</style>