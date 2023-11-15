<script setup lang="ts">
import {ref} from 'vue';
import {storeToRefs} from 'pinia'
import {useSettingsStore} from "@/store/module/settings.ts";
import {resetConfigLayout} from "@/utils";
import {dialogConfirm, msgSuccess} from "@/utils/msg-util.ts";

const settingsStore = useSettingsStore()

/** 使用 storeToRefs 将提取的属性保持其响应性 */
const {
  showLogo,
  fixedHeader,
  showFooter,
  showThemeSwitch,
  showScreenfull,
} = storeToRefs(settingsStore)

const settingsText = {
  "显示 Logo": showLogo,
  "固定 Header": fixedHeader,
  "显示页脚 Footer": showFooter,
  "显示切换主题按钮": showThemeSwitch,
  "显示全屏按钮": showScreenfull,
  // "显示消息通知": showNotify,
  // "显示搜索按钮": showSearchMenu,
  // "是否缓存标签栏": cacheTagsView,
}

const visible = ref(false);

const handleClick = () => {
  visible.value = true;
};

const resetSettings = async () => {
  dialogConfirm("确认重置？", "此操作将会将所有设置回归初始状态，请谨慎操作", (): void => {
    resetConfigLayout()
    visible.value = false
  })
}
</script>

<template>
  <div class="setting-container">
    <t-tooltip
        placement="bottom"
        content="打开设置"
    >
      <t-button theme="default" variant="text" shape="square" @click="handleClick">
        <t-icon name="setting"/>
      </t-button>
    </t-tooltip>
  </div>

  <t-drawer v-model:visible="visible" header="全局设置">
    <t-space direction="vertical" size="small" style="width: 100%">
      <div style="font-weight: bold">温馨提示</div>
      <span>此处的所有内容均为点击后即刻生效，且具备记忆功能，如要重置可点击底侧按钮</span>
    </t-space>
    <t-divider/>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-list>
        <t-list-item v-for="(svalue,sname,index) in settingsText" :key="index">
          {{ sname }}
          <template #action>
            <t-switch size="medium" v-model="svalue.value">
              <!--              <template #label="slotProps">-->
              <!--                <template v-if="slotProps.value">-->
              <!--                  <t-icon name="check"/>-->
              <!--                </template>-->
              <!--                <template v-else>-->
              <!--                  <t-icon name="close"/>-->
              <!--                </template>-->
              <!--              </template>-->
            </t-switch>
          </template>
        </t-list-item>
      </t-list>
    </t-space>
    <template #footer>
      <t-button theme="danger" style="width: 100%;" @click="resetSettings">
        <template #icon>
          <t-icon name="refresh"/>
        </template>
        重置设置
      </t-button>
    </template>
  </t-drawer>
</template>

<style scoped lang="scss">
.setting-container {
  margin-right: 10px;
}
</style>
