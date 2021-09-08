<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useStore } from "@/store/index"
import CmsTable from "@/base-ui/table/index"

const props = defineProps<{
  tableContentConfig: {
    propList: any[]
    [key: string]: any
  }
  pageName: string
}>()

// 双向绑定 pageInfo
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
watch(pageInfo, () => getPageData())

const store = useStore()
// 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  store.dispatch("system/getPageListAction", {
    pageName: props.pageName,
    queryInfo: {
      offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo,
    },
  })
}
getPageData()
defineExpose({ getPageData })

const dataList = computed(() =>
  store.getters["system/pageListData"](props.pageName),
)
const dataCount = computed(() =>
  store.getters["system/pageListCount"](props.pageName),
)

// 获得选择的数据
const getSelectionChange = (value: any) => value
</script>

<template>
  <cms-table
    v-model:page="pageInfo"
    :data-list="dataList"
    :list-count="dataCount"
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
