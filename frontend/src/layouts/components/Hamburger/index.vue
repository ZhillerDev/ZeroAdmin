<script lang="ts" setup>

interface Props {
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

/** Vue 3.3+ defineEmits 语法 */
const emit = defineEmits<{
  toggleClick: []
}>()

const toggleClick = () => {
  emit("toggleClick")
}
</script>

<template>
  <t-button theme="default" variant="text" shape="square" @click="toggleClick">
    <t-icon :name="isActive?'chevron-left-double-s':'chevron-right-double-s'"/>
  </t-button>
</template>

<style lang="scss" scoped>
.icon {
  vertical-align: middle;
}
</style>
