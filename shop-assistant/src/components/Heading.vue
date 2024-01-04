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
  font-size: xx-large;
  color: var(--color-primary);
}
</style>