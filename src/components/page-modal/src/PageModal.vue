<script setup lang="ts">
import { ref, watch } from "vue"
import CmsForm, { IForm } from "@/base-ui/form"
import { useStore } from "@/store"

const props = withDefaults(
  defineProps<{
    pageName: string
    modalConfig: IForm
    defaultInfo: Record<string, any>
  }>(),
  {
    defaultInfo: () => ({}),
  },
)

const dislogVisible = ref(false)
const formData = ref<any>({})

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = (newValue as any)[`${item.field}`]
    }
  },
)

const store = useStore()
// 确定按钮的逻辑
const handleConfirmClick = () => {
  dislogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.dispatch("system/editPageDataAction", {
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id,
    })
  } else {
    // 新建
    store.dispatch("system/createPageDataAction", {
      pageName: props.pageName,
      newData: { ...formData.value },
    })
  }
}

defineExpose({ dislogVisible })
</script>

<template>
  <el-dialog
    v-model="dislogVisible"
    title="新建用户"
    width="30%"
    center
    destroy-on-close
  >
    <cms-form v-model="formData" v-bind="modalConfig" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dislogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirmClick">
          确 定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
