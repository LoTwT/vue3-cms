<template>
  <div class="login-wrapper">
    <login-panel />
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from "./components/LoginPanel.vue"
</script>

<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login-bg.svg");
}
</style>
