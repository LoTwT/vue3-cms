<script setup lang="ts">
import { ref } from "vue"
import CmsForm, { IForm } from "@/base-ui/form"

defineProps<{ modalConfig: IForm }>()

const dislogVisible = ref(false)
const formData = ref({})
</script>

<template>
  <el-dialog v-model="dislogVisible" title="新建用户" width="30%" center>
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
