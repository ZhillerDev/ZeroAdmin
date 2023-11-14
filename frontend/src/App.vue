<script setup lang="ts">
import {useTheme} from "@/hooks/useTheme.ts";

import merge from 'lodash/merge'
import zhConfig from 'tdesign-vue-next/es/locale/zh_CN'
import enConfig from 'tdesign-vue-next/es/locale/en_US'

const {initTheme} = useTheme()
initTheme()

const globalConfig = merge(zhConfig, {
  // 可以在此处定义更多自定义配置，具体可配置内容参看 API 文档
  calendar: {},
  table: {},
  pagination: {},
});
</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <router-view/>
  </t-config-provider>
</template>

<style scoped>

</style>
