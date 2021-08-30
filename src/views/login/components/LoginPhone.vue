<template>
  <div class="login-account-wrapper">
    <el-form label-width="60px">
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
import { reactive } from "vue"

const phone = reactive({
  number: "",
  verifyCode: "",
})
</script>

<style lang="less" scoped>
.verify-code-wrapper {
  display: flex;
}
.get-code-btn {
  margin-left: 8px;
}
</style>
