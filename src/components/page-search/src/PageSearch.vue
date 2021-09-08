<script setup lang="ts">
import CmsForm from "@/base-ui/form/index"
import { ref } from "vue"

const props = defineProps<{ searchFormConfig: Record<string, any> }>()
const emit = defineEmits(["resetBtnClick", "queryBtnClick"])

// 1. 动态 form
const formItems: any[] = props.searchFormConfig?.formItems ?? []
const formOriginData: Record<string, any> = {}
formItems.forEach((formItem) => (formOriginData[formItem.field] = ""))
const formData = ref(formOriginData)

// 2. 按钮处理
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  emit("resetBtnClick")
}

const handleQueryClick = () => emit("queryBtnClick", formData.value)
</script>

<template>
  <div class="page-search">
    <cms-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="form-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </cms-form>
  </div>
</template>

<style scoped lang="less">
.header {
  color: red;
}

.form-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
