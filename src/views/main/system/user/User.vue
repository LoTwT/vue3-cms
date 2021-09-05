<script setup lang="ts">
import { ref, watch } from "vue"
import CmsForm from "@/base-ui/form/index"
import { searchFormConfig } from "./config/search.config"

const formData = ref({
  username: "",
  password: "",
  gender: "",
  createTime: "",
})
</script>

<template>
  <div class="user">
    <div class="search">
      <cms-form v-model="formData" v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
