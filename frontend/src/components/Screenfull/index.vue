<script lang="ts" setup>
import {computed, ref, watchEffect} from "vue"
import screenfull from "screenfull"
import {msgError} from "@/utils/msg-util.ts";
import { Icon } from 'tdesign-icons-vue-next';


interface Props {
  /** 全屏的元素，默认是 html */
  element?: string
  /** 打开全屏提示语 */
  openTips?: string
  /** 关闭全屏提示语 */
  exitTips?: string
}

const props = withDefaults(defineProps<Props>(), {
  element: "html",
  openTips: "全屏",
  exitTips: "退出全屏",
  content: false
})

//#region 全屏
const isFullscreen = ref<boolean>(false)
const fullscreenTips = computed(() => {
  return isFullscreen.value ? props.exitTips : props.openTips
})
const fullscreenSvgName = computed(() => {
  return isFullscreen.value ? "fullscreen-exit-1" : "fullscreen-1"
})
const handleFullscreenClick = () => {
  const dom = document.querySelector(props.element) || undefined
  screenfull.isEnabled ? screenfull.toggle(dom) : msgError("Sorry，您的浏览器不支持全屏", "top-right", 1500)
}
const handleFullscreenChange = () => {
  isFullscreen.value = screenfull.isFullscreen
}
watchEffect((onCleanup) => {
  // 挂载组件时自动执行
  screenfull.on("change", handleFullscreenChange)
  // 卸载组件时自动执行
  onCleanup(() => {
    screenfull.isEnabled && screenfull.off("change", handleFullscreenChange)
  })
})
//#endregion
</script>

<template>
  <div class="screen-container">
    <t-tooltip
        placement="bottom"
        :content="fullscreenTips"
    >
      <t-button theme="default" variant="text" shape="square" @click="handleFullscreenClick">
        <icon :name="fullscreenSvgName" size="medium"/>
      </t-button>
    </t-tooltip>

    <!-- 内容区 -->
    <!--    <el-dropdown v-else>-->
    <!--      <SvgIcon :name="contentLargeSvgName"/>-->
    <!--      <template #dropdown>-->
    <!--        <el-dropdown-menu>-->
    <!--          &lt;!&ndash; 内容区放大 &ndash;&gt;-->
    <!--          <el-dropdown-item @click="handleContentLargeClick">{{ contentLargeTips }}</el-dropdown-item>-->
    <!--          &lt;!&ndash; 内容区全屏 &ndash;&gt;-->
    <!--          <el-dropdown-item @click="handleFullscreenClick" :disabled="isFullscreen">内容区全屏</el-dropdown-item>-->
    <!--        </el-dropdown-menu>-->
    <!--      </template>-->
    <!--    </el-dropdown>-->
  </div>
</template>

<style lang="scss" scoped>
.screen-container{
  margin-right: 10px;
}
</style>
