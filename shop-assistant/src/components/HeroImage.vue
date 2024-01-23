<script setup lang="ts">

</script>

<template>
<img class="responsive-image" src="../images/strawberries.jpg" alt="Hero Image" />
</template>

<style scoped>
.responsive-image {
  display: none;
  width: 100%;
  height: 45vh;
  object-fit: cover;
}
@media (min-width: 460px) {
  .responsive-image {
    display: block;
  }
}
</style>