<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import router from '@/router'

const emit = defineEmits()

const props = defineProps({
  homepage: {
    type: Boolean,
    required: false
  }
})

let searchString = ref('')

/** emits search event that is handled in ProductContainer Component
 *  if the request comes from the homepage the user should be redirected
 *  to the product search and the data should be loaded for the searchString */
const searchEvent = () => {
  if (props.homepage) {
    router.push({ path: '/productSearch', query: { query: searchString.value } })
  }
  emit('search', searchString.value)
}
</script>

<template>
  <div class="form">
    <input class="search" type="text" placeholder="search for product" v-model="searchString" />
    <Button :iconPrefix="'fas'" :iconName="'magnifying-glass'" :click-handler="searchEvent" />
  </div>
</template>

<style scoped>
.form {
  margin: 0.5rem 0;
}

.search {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem;
  border: 3px solid var(--color-primary);
  border-radius: 5px;
  height: 2.3em;
  width: 90%;
}

@media (min-width: 600px) {
  .search {
    width: auto;
  }

  .form {
    margin: 0;
  }
}
</style>