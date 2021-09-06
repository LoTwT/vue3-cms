<script setup lang="ts">
import PageSearch from "@/components/page-search/index"
import { searchFormConfig } from "./config/search.config"
</script>

<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<style scoped lang="less"></style>
