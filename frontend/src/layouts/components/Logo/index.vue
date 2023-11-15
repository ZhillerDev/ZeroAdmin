<script lang="ts" setup>
import {storeToRefs} from "pinia"
import {useSettingsStore} from "@/store/module/settings.ts"
import logo from "@/assets/layouts/logo.png?url"
import logoText1 from "@/assets/layouts/logo-dark.png?url"
import logoText2 from "@/assets/layouts/logo-light.png?url"
import {useAppStore} from "@/store/module/app.ts";
import {useTheme} from "@/hooks/useTheme.ts";

interface Props {
  collapse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapse: true
})

const settingsStore = useSettingsStore()
const {activeThemeName} = useTheme()
const {layoutMode} = storeToRefs(settingsStore)
</script>

<template>
  <div class="layout-logo-container" :class="{ collapse: props.collapse, 'layout-mode-top': layoutMode === 'top' }">
    <transition name="layout-logo-fade">
      <router-link v-if="props.collapse" key="collapse" to="/">
        <img :src="logo" class="layout-logo" alt="none"/>
      </router-link>
      <router-link v-else key="expand" to="/">
        <img :src="activeThemeName==='dark' ? logoText1 : logoText2" class="layout-logo-text" alt="none"/>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.layout-logo-container {
  position: relative;
  width: 100%;
  height: var(--v3-header-height);
  line-height: var(--v3-header-height);
  background-color: transparent;
  text-align: center;
  overflow: hidden;

  .layout-logo {
    display: none;
  }

  .layout-logo-text {
    height: 60%;
    width: 60%;
    vertical-align: middle;
  }
}

.layout-mode-top {
  height: var(--v3-navigationbar-height);
  line-height: var(--v3-navigationbar-height);
}

.collapse {
  .layout-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    display: inline-block;
  }

  .layout-logo-text {
    display: none;
  }
}
</style>
