<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useMediaQuery } from '@vueuse/core';

const menuVisible = ref(false);
const isLargeScreen = useMediaQuery('(min-width: 550px)');

watchEffect(() => {
  if (isLargeScreen.value) {
    menuVisible.value = true;
  }
});

function toggleMenu() {
  if (!isLargeScreen.value) {
    menuVisible.value = !menuVisible.value;
  }
}
</script>


<template>
  <nav>
    <RouterLink to="/" class="logoLink">Shop Assistant</RouterLink>
    <div class="menu-items" v-show="menuVisible">
      <RouterLink to="/productSearch" active-class="active">Product Search</RouterLink>
      <RouterLink to="/favorites" active-class="active">Favorites</RouterLink>
      <RouterLink to="/cart" active-class="active">Shopping Cart</RouterLink>
    </div>
    <div class="burger-menu" v-on:click="toggleMenu" v-show="!isLargeScreen">
      <font-awesome-icon icon="bars" size="lg" v-show="!menuVisible" />
      <font-awesome-icon icon="xmark" size="lg" v-show="menuVisible" />
    </div>
  </nav>
</template>

<style>
nav {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

nav a {
  display: inline-block;
  font-size: large;
}

a:hover {
  background-color: var(--color-background-soft);
}

.active {
  text-decoration: underline;
}

.logoLink {
  font-size: x-large;
  color: var(--color-primary);
}

.burger-menu {
  margin: 0 2rem;
  cursor: pointer;
}

.menu-items {
  display: flex;
  flex-direction: column;
}


@media (min-width: 1025px) {
  nav {
    margin: 0 1rem;
    margin-top: 1rem;
    justify-content: flex-start;
  }

  nav a {
    margin: 0 1rem;
    font-size: x-large;
  }

  .logoLink {
    font-size: xx-large;
  }

  .menu-items {
    flex-direction: row;
    margin: 0 1rem;
  }
}

@media (min-width: 550px) and (max-width: 1024px) {
  nav {
    margin-top: 1rem;
    justify-content: flex-start;
  }

  nav a {
    margin: 0 0.5rem;
  }

  .menu-items {
    flex-direction: row;
    margin: 0 0.5rem;
  }
}</style>