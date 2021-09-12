<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useStore } from "@/store/index"
import CmsTable from "@/base-ui/table/index"
import { usePermission } from "@/hooks/use-permission"

const props = defineProps<{
  tableContentConfig: {
    propList: any[]
    [key: string]: any
  }
  pageName: string
}>()

// 获取操作的权限
const canCreate = usePermission(props.pageName, "create")
const canUpdate = usePermission(props.pageName, "update")
const canDelete = usePermission(props.pageName, "delete")
const canQuery = usePermission(props.pageName, "query")

// 双向绑定 pageInfo
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
watch(pageInfo, () => getPageData())

const store = useStore()
// 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  if (!canQuery) return

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

// 获取其他动态插槽名称
const otherPropSlots = props.tableContentConfig.propList.filter(
  (item) =>
    !(
      item.slotName === "status" ||
      item.slotName === "createAt" ||
      item.slotName === "updateAt" ||
      item.slotName === "handler"
    ),
)
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
      <el-button v-if="canCreate" type="primary" size="medium">
        新建用户
      </el-button>
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
        <el-button v-if="canUpdate" icon="el-icon-edit" type="text" size="mini">
          编辑
        </el-button>
        <el-button
          v-if="canDelete"
          icon="el-icon-delete"
          type="text"
          size="mini"
        >
          删除
        </el-button>
      </div>
    </template>
    <template
      v-for="item in otherPropSlots"
      :key="item.prop"
      #[item.slotName]="scope"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </template>
  </cms-table>
</template>

<style scoped lang="less"></style>
