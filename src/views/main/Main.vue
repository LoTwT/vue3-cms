<template>
  <div class="main-wrapper">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <NavMenu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoleChange" />
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import NavMenu from "@/components/nav-menu/index"
import NavHeader from "@/components/nav-header/index"

const isCollapse = ref(false)
const handleFoleChange = (isFold: boolean) => (isCollapse.value = isFold)
</script>

<style scoped lang="less">
.main-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100%-48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
