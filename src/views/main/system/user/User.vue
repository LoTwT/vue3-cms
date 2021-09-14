<script setup lang="ts">
import { computed } from "vue"

import PageSearch from "@/components/page-search/index"
import PageContent from "@/components/page-content/index"
import PageModal from "@/components/page-modal/index"

import { modalConfig } from "./config/modal.config"
import { searchFormConfig } from "./config/search.config"
import { tableContentConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"
import { EFormType } from "@/base-ui/form"
import { useStore } from "@/store"

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

// PageModal 相关
const createCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.type === EFormType.PASSWORD,
  )

  passwordItem!.isHidden = false
}
const editCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.type === EFormType.PASSWORD,
  )

  passwordItem!.isHidden = true
}

// 动态添加部门和角色列表
const store = useStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === "departmentId",
  )
  departmentItem!.options = store.state.entireDepartment.map((item) => ({
    title: item.name,
    value: item.id,
  }))
  const roleItem = modalConfig.formItems.find((item) => item.field === "roleId")
  roleItem!.options = store.state.entireRole.map((item) => ({
    title: item.name,
    value: item.id,
  }))
  return modalConfig
})

// 调用 hook 获取公共变量和函数
const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal(createCallback, editCallBack)
</script>

<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    />
    <div class="content">
      <page-content
        ref="pageContentRef"
        :table-content-config="tableContentConfig"
        page-name="Users"
        @create-btn-click="handleNewData"
        @edit-btn-click="handleEditData"
      />
    </div>
    <div class="page-modal">
      <page-modal
        ref="pageModalRef"
        page-name="Users"
        :default-info="defaultInfo"
        :modal-config="modalConfigRef"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: solid 20px #f5f5f5;
}
</style>
