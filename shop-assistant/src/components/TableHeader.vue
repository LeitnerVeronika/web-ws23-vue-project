<script setup lang="ts">
</script>

<template>
  <section class="grid-container">
    <div></div>
    <h2 class="table-productName">Product</h2>
    <div>Market</div>
    <div>Price</div>
    <div>Difference</div>
    <div></div>
  </section>
</template>

<style scoped>
.grid-container{
  display: grid;
  gap: 50px;
  grid-template-columns: 0.1fr 4fr 0.5fr 1fr 1fr 0.5fr;
}
.table-productName{
  color: var(--color-primary);

}
</style>