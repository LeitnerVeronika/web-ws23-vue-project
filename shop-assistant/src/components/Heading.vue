<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  headingText: string
}>();
</script>

<template>
<h1 class="heading1">{{ headingText }}</h1>
</template>

<style scoped>
.heading1 {
  font-family: 'DM Serif Display', serif;
  font-size: x-large;
  color: var(--color-primary);
}
@media (min-width: 1025px) {
  .heading1 {
    font-size: xx-large;
  }
}
</style>