<script setup lang="ts">
import PageSearch from "@/components/page-search/index"
import PageContent from "@/components/page-content/index"

import { searchFormConfig } from "./config/search.config"
import { tableContentConfig } from "./config/content.config"
</script>

<template>
  <page-search :search-form-config="searchFormConfig" />
  <page-content :table-content-config="tableContentConfig" page-name="Role" />
</template>

<style scoped lang="less"></style>
