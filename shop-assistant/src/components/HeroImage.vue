<script setup lang="ts">
// defineProps<{
//   imgSrc: string
// }>();
</script>

<template>
<!-- <img class="responsive-image" :src="imgSrc" alt="Hero Image" /> -->
<img class="responsive-image" src="../images/strawberries.jpg" alt="Hero Image" />
</template>

<style scoped>
.responsive-image {
  width: 100%;
  height: 45vh;
  object-fit: cover;
}
</style>