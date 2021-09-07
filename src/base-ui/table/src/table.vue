<script setup lang="ts">
withDefaults(
  defineProps<{
    dataList: any[]
    propList: any[]
    showIndexColumn: boolean
    showSelectColumn: boolean
  }>(),
  {
    showIndexColumn: false,
    showSelectColumn: false,
  },
)

const emit = defineEmits(["selectionChange"])

const handleSelectionChange = (value: any) => emit("selectionChange", value)
</script>

<template>
  <div class="cms-table">
    <el-table
      :data="dataList"
      border
      style="width: 100%"
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
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<style scoped lang="less"></style>
