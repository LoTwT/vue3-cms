<script setup lang="ts">
import { ref, watch } from "vue"
import CmsForm, { IForm } from "@/base-ui/form"

const props = withDefaults(
  defineProps<{ modalConfig: IForm; defaultInfo: object }>(),
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
        <el-button type="primary" @click="dislogVisible = false">
          确 定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
