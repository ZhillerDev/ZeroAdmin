<script setup lang="ts">

import {useUserStore} from "@/store/module/user.ts";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const router = useRouter()

const options = [
  {content: '个人中心', value: 1},
  {content: '通知', value: 2, divider: true},
  {
    content: '注销账户', value: 3, onClick: () => {
      userStore.logout()
      router.push("/login")
    }
  },
]
</script>

<template>
  <div class="userinfo-container">
    <t-dropdown :options="options" :min-column-width="88" trigger="hover">
      <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"
                shape="round"/>
    </t-dropdown>
  </div>
</template>

<style scoped lang="scss">
.userinfo-container {
  margin-right: 10px;
}
</style>
