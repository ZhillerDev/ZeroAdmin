<script setup lang="ts">
import FooterBar from './FooterBar/index.vue'
import {useSettingsStore} from "@/store/module/settings.ts";

const settingsStore = useSettingsStore()
</script>

<template>
  <section class="app-main">
    <div class="app-scrollbar">
      <!-- key 采用 route.path 和 route.fullPath 有着不同的效果，大多数时候 path 更通用 -->
      <router-view v-slot="{ Component, route }">
        <transition name="el-fade-in" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.path" class="app-container-grow"/>
          </keep-alive>
        </transition>
      </router-view>
      <footer-bar v-if="settingsStore.showFooter"/>
    </div>
<!--    <back-to-top class="back-top"/>-->
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.app-main {
  width: 100%;
  display: flex;
}

.app-scrollbar {
  flex-grow: 1;
  overflow: auto;
  @extend %scrollbar;
  display: flex;
  flex-direction: column;

  .app-container-grow {
    flex-grow: 1;
  }
}

.back-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
