<template>
  <div class="nav-menu-wrapper">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="logo" class="img" />
      <span v-if="!collapse" class="logo-title">CMS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <!-- 二级菜单 -->
        <template v-if="menu.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="menu.id.toString()">
            <template #title>
              <i v-if="menu.icon" :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
            <!-- 遍历里面的 submenu -->
            <template v-for="submenu in menu.children" :key="submenu.id">
              <el-menu-item :index="submenu.id.toString()">
                <i v-if="submenu.icon" :class="submenu.icon"></i>
                <span>{{ submenu.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="menu.type === 2">
          <el-menu-item :index="menu.id.toString()">
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

defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
})

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

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
