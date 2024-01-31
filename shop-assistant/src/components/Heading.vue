<!-- 
This Vue component is used to display the headings on the webpage. 
The heading text is passed as a prop to the component. 
The font size is responsive, with a larger size used for viewports that are 1024px or wider.
-->
<script setup lang="ts">
defineProps<{
  headingText: string
}>();
</script>

<template>
<h1 class="heading1" data-testid="heading-element">{{ headingText }}</h1>
</template>

<style scoped>
.heading1 {
  font-family: 'DM Serif Display', serif;
  font-size: x-large;
  color: var(--color-primary);
  margin: 0 1rem;
}

@media (min-width: 1024px) {
  .heading1 {
    font-size: xx-large;
  }
}
</style>