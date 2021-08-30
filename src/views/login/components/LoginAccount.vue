<template>
  <div class="login-account-wrapper">
    <el-form
      ref="formRef"
      label-width="80px"
      :rules="accountFormRules"
      :model="account"
    >
      <el-form-item label="帐号" prop="username">
        <el-input v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { accountFormRules } from "../config/login.config"
import type { ElForm } from "element-plus"
import { useLocalCache } from "@/utils/cache"
import { useStore } from "vuex"

const localCache = useLocalCache()
const store = useStore()

// 账号信息
const account = reactive({
  username: localCache.getCache("username") ?? "",
  password: localCache.getCache("password") ?? "",
})

const formRef = ref<InstanceType<typeof ElForm>>()

// 处理账号登录
const dealAccountLogin = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1. 判断是否需要记住密码
      if (isKeepPassword) {
        // 进行本地缓存
        localCache.setCache("username", account.username)
        localCache.setCache("password", account.password)
      } else {
        localCache.removeCache("username")
        localCache.removeCache("password")
      }

      // 2. 进行登录验证
      store.dispatch("login/accountLoginAction", {
        name: account.username,
        password: account.password,
      })
    }
  })
}

defineExpose({ dealAccountLogin })
</script>

<style lang="less" scoped></style>
