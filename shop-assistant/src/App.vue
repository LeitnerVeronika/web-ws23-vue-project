<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <header>
    <Navigation />
  </header>
  <div class="page">
    <RouterView  />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

* {
  font-family: 'DM Serif Display', serif;
}

header {
  line-height: 2;
  max-height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: var(--color-background-header);
}

.page {
  margin-top: 4rem;
}
</style>
