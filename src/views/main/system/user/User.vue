<script setup lang="ts">
import CmsForm from "@/base-ui/form/index"
import { searchFormConfig } from "./config/search.config"
</script>

<template>
  <div class="user">
    <div class="search">
      <cms-form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
