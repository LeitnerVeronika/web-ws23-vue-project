<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

function toggleMenu() {
  const menuItems = document.querySelector('.menu-items');
  if (menuItems) {
    menuItems.classList.toggle('active');
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/" class="logoLink">Shop Assistant</RouterLink>
    <div class="burger-menu" v-on:click="toggleMenu">
      <font-awesome-icon icon="bars" />
    </div>
    <div class="menu-items">
      <RouterLink to="/productSearch" active-class="active">Product Search</RouterLink>
      <RouterLink to="/favorites" active-class="active">Favorites</RouterLink>
      <RouterLink to="/cart" active-class="active">Shopping Cart</RouterLink>
    </div>
  </nav>
</template>

<style>
.burger-menu {
  display: none;
}
.menu-items {
  display: block;
}
nav {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
  margin-top: 2em;
}

nav a {
  display: inline-block;
  margin: 0 1em;
}

a {
  text-decoration: none;
  color: var(--color-text);
  font-size: x-large;
}

a:hover {
  background-color: var(--color-background-soft);
}

.active {
  text-decoration: underline;
}

.logoLink {
  font-size: xx-large;
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  nav {
    margin-top: 1rem;
  }

  nav a {
    margin: 0 0.5em;
    font-size: large;
  }

  .logoLink {
    font-size: x-large;
  }
}

@media (max-width: 460px) {
  nav {
    margin: 0;
  }
  .logoLink {
    font-size: large;
  }
  .burger-menu {
    margin: 0 2rem;
    display: block;
  }
  .menu-items {
    display: none;
  }
}
</style>