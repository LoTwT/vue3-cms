<template>
  <h1>{{ msg }}</h1>

  <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts" setup>
import { ref } from "vue"

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
