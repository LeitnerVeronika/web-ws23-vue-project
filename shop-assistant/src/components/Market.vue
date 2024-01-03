<script setup lang="ts">

const props = defineProps({
  text: {
    type: String,
    required: true
  },
});

let className = props.text?.toLowerCase()
</script>

<template>
  <div class="market-container" :class="className">
    {{text}}
  </div>
</template>

<style scoped>
.market-container {
  max-width: 100px;
  min-width: 80px;
  max-height: 30px;
  text-align: center;
  padding: 2px;
  text-transform: uppercase;
  color: white;
  border-radius: 8px;
}

.billa {
  background-color: #F6BE00;
}

.spar {
  background-color: #FF0000;
}

.dm {
  background-color: #800080;
}

.bipa {
  background-color: #FF00FF;
}

.hofer {
  background-color: #ADD8E6;
}

.lidl {
  background-color: #8800FF;
}

.metro {
  background-color: #0000FF;
}

.mpreis {
  background-color: #8B0000;
}

.müller {
  background-color: #FFA500;
}

.penny {
  background-color: #0D6EFD;
}

.unimarkt {
  background-color: #008000;
}

.rewe {
  background-color: #8B0000;
}

</style>