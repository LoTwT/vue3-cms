<script setup lang="ts">
import { IFormItem, EFormType } from "../types"

withDefaults(
  defineProps<{
    formItems: IFormItem[]
    labelWidth: string
    itemStyle: Object
    colLayout: Object
  }>(),
  {
    formItems: () => [],
    labelWidth: "100px",
    itemStyle: () => ({
      padding: "10px 40px",
    }),
    colLayout: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
  },
)
</script>

<template>
  <div class="form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="
                  item.type === EFormType.INPUT ||
                  item.type === EFormType.PASSWORD
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === EFormType.PASSWORD"
                  style="width: 100%"
                />
              </template>
              <template v-else-if="item.type === EFormType.SELECT">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === EFormType.DATE_PICKER">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.form {
  padding-top: 22px;
}
</style>
