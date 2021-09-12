<script setup lang="ts">
import PageSearch from "@/components/page-search/index"
import PageContent from "@/components/page-content/index"
import PageModal from "@/components/page-modal/index"

import { modalConfig } from "./config/modal.config"
import { searchFormConfig } from "./config/search.config"
import { tableContentConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/use-page-search"

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
</script>

<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    />
    <div class="content">
      <page-content
        ref="pageContentRef"
        :table-content-config="tableContentConfig"
        page-name="Users"
      />
    </div>
    <div class="page-modal">
      <page-modal :modal-config="modalConfig" />
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: solid 20px #f5f5f5;
}
</style>
