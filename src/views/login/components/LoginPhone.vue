<template>
  <div class="login-account-wrapper">
    <el-form
      ref="formRef"
      label-width="80px"
      :rules="phoneFormRules"
      :model="phone"
    >
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="verify-code-wrapper">
          <el-input v-model="phone.verifyCode" />
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import type { ElForm } from "element-plus"
import { phoneFormRules } from "../config/login.config"
import store from "@/store"

const phone = reactive({
  number: "",
  verifyCode: "",
})

const formRef = ref<InstanceType<typeof ElForm>>()
const dealPhoneLogin = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      store.dispatch("login/phoneLoginAction", { ...phone })
    }
  })
}

defineExpose({ dealPhoneLogin })
</script>

<style lang="less" scoped>
.verify-code-wrapper {
  display: flex;
}
.get-code-btn {
  margin-left: 8px;
}
</style>
