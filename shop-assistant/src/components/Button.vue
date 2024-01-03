<template>
  <button @click="handleClick" class="custom-button">
    <font-awesome-icon :icon="[iconPrefix, iconName]" />
  </button>
</template>

<script>
export default {
  props: {
    iconPrefix: String,
    iconName: String,
    clickHandler: Function,
  },
  methods: {
    handleClick() {
      if (this.clickHandler) {
        this.clickHandler();
      }
    },
  },
};
</script>

<style scoped>
.custom-button {
  border: none;
}
</style>