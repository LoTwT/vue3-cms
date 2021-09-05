<script setup lang="ts">
import { ref, computed } from "vue"
import UserInfo from "./components/UserInfo.vue"
import CmsBreadcrumb, { IBreadcrumb } from "@/base-ui/breadcrumb/index"
import { mapBreadcrumbs } from "@/utils/map-menus"
import { useStore } from "@/store/index"
import { useRoute } from "vue-router"

const emit = defineEmits(["foldChange"])

const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}

// 面包屑数据
const store = useStore()
const route = useRoute()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = route.path
  return mapBreadcrumbs(userMenus, currentPath)
})
</script>

<template>
  <div class="nav-header-wrapper">
    <i
      class="fold-icon"
      :class="isFold ? ' el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <cms-breadcrumb :breadcrumbs="breadcrumbs" />
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
