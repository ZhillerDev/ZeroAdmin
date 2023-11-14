<script setup lang="ts">
import Logo from '@/layouts/components/Logo/index.vue'

import {computed} from 'vue'
import {useRoute} from "vue-router";
import {useAppStore} from "@/store/module/app.ts";
import {useSettingsStore} from "@/store/module/settings.ts";
import {storeToRefs} from 'pinia'
import {DeviceEnum} from "@/constants/app-key.ts";


const route = useRoute()
const appStore = useAppStore()
const settingsStore = useSettingsStore()

const { sidebar, device } = storeToRefs(appStore)
const { layoutMode, showLogo } = storeToRefs(settingsStore)

const isCollapse = computed(() => !sidebar.value.opened)
const isLogo = computed(() => showLogo.value)
const isMobile = computed(() => device.value === DeviceEnum.Mobile)

const activeMenu = computed(() => {
  const {
    meta: { activeMenu },
    path
  } = route
  return activeMenu ? activeMenu : path
})
</script>

<template>
  <div :class="{ 'has-logo': isLogo }">
    <logo v-if="isLogo" :collapse="isCollapse"/>
    <div class="menu-container">
      <t-menu
          default-value="3-2"
          expand-mutex
          :collapsed="isCollapse"
          width="220px"
      >
        <t-submenu value="3">
          <template #icon>
            <t-icon name="mail" />
          </template>
          <template #title>
            <span>消息区</span>
          </template>
          <t-submenu value="3-1" title="二级菜单">
            <t-menu-item value="3-1-1"> 三级菜单内容 </t-menu-item>
            <t-menu-item value="3-1-2"> 三级菜单内容 </t-menu-item>
            <t-menu-item value="3-1-3"> 三级菜单内容 </t-menu-item>
          </t-submenu>
          <t-submenu value="3-5" title="二级菜单">
            <t-menu-item value="3-5-1"> 三级菜单内容 </t-menu-item>
            <t-menu-item value="3-5-2"> 三级菜单内容 </t-menu-item>
            <t-menu-item value="3-5-3"> 三级菜单内容 </t-menu-item>
          </t-submenu>
          <t-menu-item value="3-2"> 二级菜单内容 </t-menu-item>
          <t-menu-item value="3-3"> 二级菜单内容 </t-menu-item>
          <t-menu-item value="3-4"> 二级菜单内容 </t-menu-item>
        </t-submenu>
        <t-menu-item value="user-circle">
          <template #icon>
            <t-icon name="user-circle" />
          </template>
          个人中心
        </t-menu-item>
        <t-submenu value="4">
          <template #icon>
            <t-icon name="play-circle" />
          </template>
          <template #title>
            <span>视频区</span>
          </template>
          <t-menu-item value="4-1"> 二级菜单内容 </t-menu-item>
          <t-menu-item value="4-2"> 二级菜单内容 </t-menu-item>
          <t-menu-item value="4-3"> 二级菜单内容 </t-menu-item>
        </t-submenu>
        <t-menu-item value="edit1">
          <template #icon>
            <t-icon name="edit-1" />
          </template>
          资源编辑
        </t-menu-item>
        <template #operations>
          <t-button variant="text" shape="square" >
            <template #icon><t-icon name="view-list" /></template>
          </t-button>
        </template>
      </t-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
%tip-line {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--v3-sidebar-menu-tip-line-bg-color);
  }
}

.has-logo {
  .el-scrollbar {
    // 多 1% 是为了在左侧模式时侧边栏最底部不显示 1px 左右的白色线条
    height: calc(101% - var(--v3-header-height));
  }
}

.menu-container{
  width: 100%;
  height: 100%;
}

</style>
