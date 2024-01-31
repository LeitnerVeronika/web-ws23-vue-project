<!-- 
This Vue component is used to display a responsive hero image on the startpage. 
The image is hidden by default and only displayed at certain viewport widths (460px to 1023px and 1024px and above), 
with different heights for each range. The image used is 'strawberries.jpg'.
-->
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