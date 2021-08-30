<template>
  <div class="login-panel-wrapper">
    <h1 class="panel-title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-button" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import LoginAccount from "./LoginAccount.vue"
import LoginPhone from "./LoginPhone.vue"

const currentTab = ref<string>("account")
const isKeepPassword = ref(true)

const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()
const handleLoginClick = () => {
  if (currentTab.value === "account") {
    loginAccountRef.value?.dealAccountLogin(isKeepPassword.value)
  } else if (currentTab.value === "phone") {
    loginPhoneRef.value?.dealPhoneLogin()
  }
}
</script>

<style lang="less" scoped>
.login-panel-wrapper {
  width: 320px;
  margin-bottom: 150px;

  .panel-title {
    text-align: center;
  }
}

.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.login-button {
  width: 100%;
  margin-top: 10px;
}
</style>
