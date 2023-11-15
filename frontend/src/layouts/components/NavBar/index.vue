<script setup lang="ts">
// 导入必备组件
import Hamburger from "@/layouts/components/Hamburger/index.vue"
import Breadcrumb from "@/layouts/components/Breadcrumb/index.vue"
import SideBar from "@/layouts/components/SideBar/index.vue"
import Screenfull from "@/components/Screenfull/index.vue"
import ThemeSwitch from "@/components/ThemeSwitch/index.vue"
import SettingsPlane from "@/components/SettingsPlane/index.vue"

// 导入其他钩子库等
import {computed} from "vue"
import {storeToRefs} from "pinia"
import {useRouter} from "vue-router";
import {useAppStore} from "@/store/module/app.ts";
import {useSettingsStore} from "@/store/module/settings.ts";
import {DeviceEnum} from "@/constants/app-key.ts";

const router = useRouter()
const appStore = useAppStore()
const settingsStore = useSettingsStore()

const {sidebar, device} = storeToRefs(appStore)
const {layoutMode, showNotify, showThemeSwitch, showScreenfull, showSearchMenu} = storeToRefs(settingsStore)

const isTop = computed(() => layoutMode.value === "top")
const isMobile = computed(() => device.value === DeviceEnum.Mobile)

/** 切换侧边栏 */
const toggleSidebar = () => {
  appStore.toggleSidebar(false)
}

/** 登出 */
const logout = () => {
  router.push("/login")
}
</script>

<template>
  <div class="navigation-bar">
    <hamburger v-if="!isTop || isMobile" class="hamburger" :is-active="sidebar.opened" @toggle-click="toggleSidebar"/>
    <breadcrumb v-if="!isTop || isMobile" class="breadcrumb"/>
    <side-bar v-if="isTop && !isMobile" class="sidebar"/>
    <div class="right-menu">
      <screenfull v-if="settingsStore.showScreenfull"/>
      <theme-switch v-if="showThemeSwitch"/>
      <settings-plane/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-bar {
  height: var(--v3-navigationbar-height);
  overflow: hidden;
  //background: var(--v3-header-bg-color);
  display: flex;
  justify-content: space-between;

  .hamburger {
    display: flex;
    align-items: center;
    margin: 8px;
    cursor: pointer;
  }

  .breadcrumb {
    flex: 1;
    margin-left: 10px;
    // 参考 Bootstrap 的响应式设计将宽度设置为 576
    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  .sidebar {
    flex: 1;
    // 设置 min-width 是为了让 Sidebar 里的 el-menu 宽度自适应
    min-width: 0px;

    :deep(.el-menu) {
      background-color: transparent;
    }

    :deep(.el-sub-menu) {
      &.is-active {
        .el-sub-menu__title {
          color: var(--el-menu-active-color) !important;
        }
      }
    }
  }

  .right-menu {
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #606266;

    .right-menu-item {
      padding: 0 10px;
      cursor: pointer;

      .right-menu-avatar {
        display: flex;
        align-items: center;

        .el-avatar {
          margin-right: 10px;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
