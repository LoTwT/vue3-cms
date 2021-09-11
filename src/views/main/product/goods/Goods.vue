<script setup lang="ts">
import PageContent from "@/components/page-content"
import { tableContentConfig } from "./config/content.config"
</script>

<template>
  <div class="goods">
    <page-content :table-content-config="tableContentConfig" page-name="Goods">
      <template #image="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">
        {{ "￥" + scope.row.oldPrice }}
      </template>
    </page-content>
  </div>
</template>

<style scoped lang="less"></style>
