<script setup lang="ts">
import CmsForm from "@/base-ui/form/index"
import { ref } from "vue"

defineProps<{ searchFormConfig: Record<string, any> }>()

const formData = ref({
  username: "",
  password: "",
  gender: "",
  createTime: "",
})
</script>

<template>
  <div class="page-search">
    <cms-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="form-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
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
