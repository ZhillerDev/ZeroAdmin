<script setup lang="ts">
import {useTheme} from "@/hooks/useTheme.ts";
import {msgError, msgSuccess} from "@/utils/msg-util.ts";
import {reactive} from "vue";

const {activeThemeName, setTheme} = useTheme()

const options = reactive([
  {content: '默认', value: 'normal'},
  {content: '暗黑', value: 'dark'}
]);
const clickHandler = (data) => {
  if (data.value === activeThemeName.value) {
    msgError('已选择该主题', "bottom-right", 500)
    return
  }
  msgSuccess(data.content + "主题", "bottom-right", 1000)
  setTheme(data.value)
};
</script>

<template>
  <div class="theme-container">
    <t-dropdown :options="options" @click="clickHandler" >
      <t-button theme="default" variant="text" shape="square">
        <t-icon name="contrast"/>
      </t-button>
    </t-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.theme-container{
  margin-right: 10px;
}
</style>
