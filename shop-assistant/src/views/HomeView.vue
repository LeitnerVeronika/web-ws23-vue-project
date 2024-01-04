<script setup lang="ts">
import HeroImage from "@/components/HeroImage.vue";
import Heading from "@/components/Heading.vue";
import SearchBar from "@/components/SearchBar.vue";
</script>

<template>
  <HeroImage />
  <div class="content">
    <div class="flex-container">
      <Heading headingText="Offer of the day" />
      <SearchBar />
    </div>
  </div>
  <!-- <HeroImage imgSrc="../images/strawberries.jpg"/> -->
  <main>
  </main>
</template>

<style scoped>
.content {
  margin: 1% 3%;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>