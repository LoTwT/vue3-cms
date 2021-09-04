<script setup lang="ts">
import { ref } from "vue"
import UserInfo from "./components/UserInfo.vue"

const emit = defineEmits(["foldChange"])

const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
</script>

<template>
  <div class="nav-header-wrapper">
    <i
      class="fold-icon"
      :class="isFold ? ' el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-header-wrapper {
  width: 100%;
  display: flex;
  .fold-icon {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
