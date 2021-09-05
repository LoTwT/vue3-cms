<script setup lang="ts">
import { IBreadcrumb } from "../types"

withDefaults(defineProps<{ breadcrumbs: IBreadcrumb[] }>(), {
  breadcrumbs: () => [],
})
</script>

<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="less"></style>
