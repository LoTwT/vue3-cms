<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store/index"
import CmsTable from "@/base-ui/table/index"

defineProps<{
  tableContentConfig: {
    propList: any[]
    [key: string]: any
  }
}>()

const store = useStore()
store.dispatch("system/getPageListAction", {
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10,
  },
})

const userList = computed(() => store.state.system.userList)
// 获得选择的数据
const getSelectionChange = (value: any) => value
</script>

<template>
  <cms-table
    :data-list="userList"
    v-bind="tableContentConfig"
    @selection-change="getSelectionChange"
  >
    <!-- header 插槽 -->
    <template #headerHandler>
      <el-button icon="el-icon-refresh"></el-button>
      <el-button type="primary" size="medium">新建用户</el-button>
    </template>
    <!-- 数据列插槽 -->
    <template #status="scope">
      <el-button
        size="mini"
        :type="scope.row.enable ? 'success' : 'danger'"
        plain
        >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
      >
    </template>
    <template #createAt="scope">
      <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
    </template>
    <template #updateAt="scope">
      <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
    </template>
    <template #handler>
      <div class="handle-btns">
        <el-button icon="el-icon-edit" type="text" size="mini">
          编辑
        </el-button>
        <el-button icon="el-icon-delete" type="text" size="mini">
          删除
        </el-button>
      </div>
    </template>
  </cms-table>
</template>

<style scoped lang="less"></style>
