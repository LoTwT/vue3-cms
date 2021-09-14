<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import { useLocalCache } from "@/utils/cache"
import { useRouter } from "vue-router"

const store = useStore()
const username = computed(() => store.state.login.userInfo.name)

const localCache = useLocalCache()
const router = useRouter()
const handleLogoutClick = () => {
  localCache.removeCache("token")
  router.push("/main")
}
</script>

<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ username }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            icon="el-icon-circle-close"
            @click="handleLogoutClick"
          >
            退出登录
          </el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
