<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/" class="logoLink">Shop Assistant</RouterLink>
    <RouterLink to="/productSearch">Product Search</RouterLink>
    <RouterLink to="/favorites">Favorites</RouterLink>
    <RouterLink to="/cart">Shopping Cart</RouterLink>
  </nav>
</template>

<style>
a{
  font-family: 'DM Serif Display', sans-serif;
  text-decoration: none;
  color: var(--color-text);
  margin-right: 5%;
  margin-left: 1.2em;
  font-size: x-large;

}
.logoLink {
  font-family: 'DM Serif Display', sans-serif;
  font-size: xx-large;
  color: var(--color-primary);
}
</style>