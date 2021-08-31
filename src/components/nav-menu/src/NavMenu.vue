<template>
  <div class="nav-menu-wrapper">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="logo" class="img" />
      <span class="logo-title">CMS</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical">
      <template v-for="menu in userMenus" :key="menu.id">
        <template v-if="menu.type === 1">
          <el-submenu>
            <i v-if="menu.icon" :class="menu.icon"></i>
          </el-submenu>
          <template v-for="submenu in menu.children" :key="submenu.id">
          </template>
        </template>
        <template v-else-if="menu.type === 2">
          <el-menu-item>
            <i v-if="menu.icon" :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store/index"

const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
</script>

<style scoped lang="less">
.nav-menu-wrapper {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .logo-title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
</style>
