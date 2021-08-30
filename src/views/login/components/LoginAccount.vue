<template>
  <div class="login-account-wrapper">
    <el-form
      ref="formRef"
      label-width="60px"
      :rules="accountFormRules"
      :model="account"
    >
      <el-form-item label="帐号" prop="username">
        <el-input v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { accountFormRules } from "../config/account.config"
import type { ElForm } from "element-plus"

// 账号信息
const account = reactive({
  username: "",
  password: "",
})

const formRef = ref<InstanceType<typeof ElForm>>()

// 处理账号登录
const dealAccountLogin = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 执行登录逻辑
    }
  })
}

defineExpose({ dealAccountLogin: dealAccountLogin })
</script>

<style lang="less" scoped></style>
