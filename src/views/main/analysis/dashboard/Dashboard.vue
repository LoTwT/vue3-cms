<script setup lang="ts">
import { useStore } from "@/store"
import CmsCard from "@/base-ui/card"
import BaseEchart from "@/base-ui/echart"

const store = useStore()
store.dispatch("dashboard/getDashboardDataAction")

const options = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
}
</script>

<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <cms-card title="分类商品数量(饼图)">
          <base-echart :options="options" />
        </cms-card>
      </el-col>
      <el-col :span="10">
        <cms-card title="不同城市商品销量"></cms-card>
      </el-col>
      <el-col :span="7">
        <cms-card title="分类商品数量(玫瑰图)"></cms-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <cms-card title="分类商品的销量"></cms-card>
      </el-col>
      <el-col :span="12">
        <cms-card title="分类商品的收藏"></cms-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
