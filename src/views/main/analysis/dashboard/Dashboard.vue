<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import CmsCard from "@/base-ui/card"
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart,
} from "@/components/page-echarts"

const store = useStore()
store.dispatch("dashboard/getDashboardDataAction")

const categoryGoodsCount = computed(() =>
  store.state.dashboard.categoryGoodsCount.map((item) => ({
    name: item.name,
    value: item.goodsCount,
  })),
)

const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []

  const categoryGoodsSaleData = store.state.dashboard.categoryGoodsSale
  categoryGoodsSaleData.forEach((data) => {
    xLabels.push(data.name)
    values.push(data.goodsCount)
  })

  return { xLabels, values }
})

const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []

  const categoryGoodsFavorData = store.state.dashboard.categoryGoodsFavor
  categoryGoodsFavorData.forEach((data) => {
    xLabels.push(data.name)
    values.push(data.goodsFavor)
  })

  return { xLabels, values }
})

const addressGoodsSale = computed(() =>
  store.state.dashboard.addressGoodsSale.map((item) => ({
    name: item.address,
    value: item.count,
  })),
)
</script>

<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <cms-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount" />
        </cms-card>
      </el-col>
      <el-col :span="10">
        <cms-card title="不同城市商品销量">
          <map-echart :map-data="addressGoodsSale" />
        </cms-card>
      </el-col>
      <el-col :span="7">
        <cms-card title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount" />
        </cms-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <cms-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale" />
        </cms-card>
      </el-col>
      <el-col :span="12">
        <cms-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor" />
        </cms-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
