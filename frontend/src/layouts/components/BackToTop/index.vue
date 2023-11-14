<script setup lang="ts">

interface props{
  name:string
}
defineProps<props>()

const scroll2Top = function () {
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div class="back-container">
    <a :href="name" rel="external nofollow">
      <t-button theme="default" variant="text" @click="scroll2Top" class="back-top">
        <t-icon name="arrow-up"/>
      </t-button>
    </a>
  </div>
</template>

<style scoped lang="scss">
.back-container {
  border: 1px solid lightgray;
  border-radius: 4px;

  .back-top{
    width: 40px;
    height: 40px;
  }
}
</style>
