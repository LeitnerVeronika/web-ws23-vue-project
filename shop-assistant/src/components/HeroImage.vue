<script setup lang="ts">

</script>

<template>
  <img class="responsive-image" src="../images/strawberries.jpg" alt="Hero Image" />
</template>

<style scoped>
.responsive-image {
  display: none;
}

@media (min-width: 460px) and (max-width: 1023px) {
  .responsive-image {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 35vh;
  }
}

@media (min-width: 1024px) {
  .responsive-image {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 45vh;
  }
}
</style>