<script setup lang="ts">
import { ref, computed, nextTick } from "vue"

import PageSearch from "@/components/page-search/index"
import PageContent from "@/components/page-content/index"
import PageModal from "@/components/page-modal"

import { searchFormConfig } from "./config/search.config"
import { tableContentConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

import { usePageModal } from "@/hooks/use-page-modal"
import { useStore } from "@/store"
import { mapMenuLeafKeys } from "@/utils/map-menus"
import type { ElTree } from "element-plus"

// 1. 处理 pageModal 的 hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = mapMenuLeafKeys(item.menuList)
  nextTick(() => elTreeRef.value?.setCheckedKeys(leafKeys, false))
}
const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal(undefined, editCallback)

const store = useStore()
const menus = computed(() => store.state.entireMenu)

const otherInfo = ref({})
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<template>
  <page-search :search-form-config="searchFormConfig" />
  <page-content
    :table-content-config="tableContentConfig"
    page-name="Role"
    @createBtnClick="handleNewData"
    @editBtnClick="handleEditData"
  />
  <page-modal
    ref="pageModalRef"
    :default-info="defaultInfo"
    :modal-config="modalConfig"
    page-name="Role"
  >
    <div class="menu-tree">
      <el-tree
        ref="elTreeRef"
        :data="menus"
        :other-info="otherInfo"
        show-checkbox
        node-key="id"
        :props="{ children: `children`, label: `name` }"
        @check="handleCheckChange"
      >
      </el-tree>
    </div>
  </page-modal>
</template>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
