<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <header>
      <Navigation/>
  </header>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
*{
  font-family:'DM Serif Display', serif;
}
header {
  line-height: 2;
  max-height: 100vh;
}


@media (min-width: 1024px) {

}
</style>
