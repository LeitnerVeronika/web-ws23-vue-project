
<template>
  <Navigation/>
  <main>
  </main>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";

</script>

<!--
  Buttons
  <Button
        :iconPrefix="'fas'"
        :iconName="'cart-plus'"
        :clickHandler="handleCustomClick"
  />


  <script setup>
  import Button from "@/components/Button.vue";

  const handleCustomClick = () => {
    // add logic for button click
    console.log('Custom function has been called!');
  };
  </script>

-->

<!--
  Icons:

  <font-awesome-icon :icon="['fas', 'cart-plus']" />

  filled star = fas; unfilled star = far
  <font-awesome-icon :icon="['fas', 'star']" />
  <font-awesome-icon :icon="['far', 'star']" />

  <font-awesome-icon :icon="['fas', 'angle-down']" />
  <font-awesome-icon :icon="['fas', 'angle-up']" />
  <font-awesome-icon :icon="['fas', 'bell']" />
  <font-awesome-icon :icon="['fas', 'times']" />

-->