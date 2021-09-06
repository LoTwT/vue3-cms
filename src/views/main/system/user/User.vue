<script setup lang="ts">
import { computed } from "vue"
import PageSearch from "@/components/page-search/index"
import { searchFormConfig } from "./config/search.config"
import { useStore } from "@/store/index"
import CmsTable from "@/base-ui/table/index"

const store = useStore()
store.dispatch("system/getPageListAction", {
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10,
  },
})

const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)

const propList = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "手机号码", minWidth: "100" },
  { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: "250",
    slotName: "createAt",
  },
  {
    prop: "updateAt",
    label: "更新时间",
    minWidth: "250",
    slotName: "updateAt",
  },
]
</script>

<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content">
      <cms-table :data-list="userList" :prop-list="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? "启用" : "禁用" }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
        <template #updateAt="scope">
          <strong>{{ scope.row.updateAt }}</strong>
        </template>
      </cms-table>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: solid 20px #f5f5f5;
}
</style>
