<template>
  <div class="nav-header-wrapper">
    <i
      class="fold-icon"
      :class="isFold ? ' el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(["foldChange"])

const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
</script>

<style scoped lang="less">
.nav-header-wrapper {
  .fold-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
