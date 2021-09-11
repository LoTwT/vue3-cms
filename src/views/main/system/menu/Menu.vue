<script setup lang="ts">
import PageContent from "@/components/page-content"
import { tableContentConfig } from "./config/content.config"
</script>

<template>
  <div class="menu">
    <page-content :table-content-config="tableContentConfig" page-name="Menu" />
  </div>
</template>

<style scoped lang="less"></style>
