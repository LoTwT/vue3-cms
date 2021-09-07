<script setup lang="ts">
import PageSearch from "@/components/page-search/index"
import PageContent from "@/components/page-content/index"

import { searchFormConfig } from "./config/search.config"
import { tableContentConfig } from "./config/content.config"
</script>

<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content">
      <page-content :table-content-config="tableContentConfig" />
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: solid 20px #f5f5f5;
}
</style>
