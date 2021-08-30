# vite-vue3-cms

a cms project...

## errors

`LoginPanel.vue` 的问题为：`<script setup lang="ts">` 内使用 `defineExpose` 暴露组件内属性时，调用方使用 `InstanceType<typeof LoginPanel>` 时，没有将被暴露属性的类型声明添加到组件实例的类型声明内。详见 [vue3 issue #4397](https://github.com/vuejs/vue-next/issues/4397)
