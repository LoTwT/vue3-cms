<script setup lang="ts">
import { computed } from "vue"
import PageSearch from "@/components/page-search/index"
import { searchFormConfig } from "./config/search.config"
import { useStore } from "@/store/index"

const store = useStore()
store.dispatch("system/getPageListAction", {
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10,
  },
})

const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)
</script>

<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<style scoped lang="less"></style>
