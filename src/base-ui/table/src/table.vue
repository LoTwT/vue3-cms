<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    dataList: any[]
    listCount: number
    propList: any[]
    showIndexColumn: boolean
    showSelectColumn: boolean
    headerTitle: string
    page: Record<string, any>
    childrenProps: object
    showFooter: boolean
  }>(),
  {
    showIndexColumn: false,
    showSelectColumn: false,
    headerTitle: "",
    listCount: 0,
    page: () => ({
      currentPage: 0,
      pageSize: 10,
    }),
    childrenProps: () => ({}),
    showFooter: true,
  },
)

const emit = defineEmits(["selectionChange", "update:page"])

const handleSelectionChange = (value: any) => emit("selectionChange", value)

const handleSizeChange = (pageSize: number) =>
  emit("update:page", { ...props.page, pageSize })
const handleCurrentChange = (currentPage: number) =>
  emit("update:page", { ...props.page, currentPage })
</script>

<template>
  <div class="cms-table">
    <div class="header">
      <slot name="header">
        <div class="header-title">{{ headerTitle }}</div>
        <div class="header-handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      v-bind="childrenProps"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div v-if="showFooter" class="footer">
      <slot name="footer">
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .header-title {
    font-size: 20px;
    font-weight: 700;
  }

  .header-handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
