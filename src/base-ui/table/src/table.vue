<script setup lang="ts">
defineProps<{ dataList: any[]; propList: any[] }>()
</script>

<template>
  <div class="cms-table">
    <el-table :data="dataList" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<style scoped lang="less"></style>
