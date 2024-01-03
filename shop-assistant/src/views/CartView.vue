<template>

    <h1>This is an about page</h1>

  <font-awesome-icon :icon="['fas', 'star']" />
  <Button
      :iconPrefix="'fas'"
      :iconName="'star'"
  />

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
