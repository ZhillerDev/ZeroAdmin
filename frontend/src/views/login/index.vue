<script lang="ts" setup>
import {reactive, ref} from "vue"
import {useRouter} from "vue-router"
import {useUserStore} from "@/store/module/user"
import {getLoginCodeApi} from "@/api/login"
import {type LoginRequestData} from "@/api/login/user-types.ts"
import ThemeSwitch from "@/components/ThemeSwitch/index.vue"
import {FormRules} from "tdesign-vue-next";
import {useTheme} from "@/hooks/useTheme.ts";
import logoText1 from "@/assets/layouts/logo-dark.png?url"
import logoText2 from "@/assets/layouts/logo-light.png?url"

const router = useRouter()
const {activeThemeName} = useTheme()
const form = ref(null);

/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
const codeUrl = ref("")
/** 登录表单数据 */
const loginFormData: LoginRequestData = reactive({
  username: "admin",
  password: "12345678",
  code: ""
})


/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  username: [{required: true, message: "请输入用户名", trigger: "blur"}],
  password: [
    {required: true, message: "请输入密码", trigger: "blur"},
    {min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur"}
  ],
  code: [{required: true, message: "请输入验证码", trigger: "blur"}]
}
/** 登录逻辑 */
const handleLogin = ({validateResult, firstError}) => {
  console.log(validateResult)
  if (validateResult === true) {
    loading.value = true
    useUserStore()
        .login(loginFormData)
        .then(() => {
          router.push({path: "/"})
        })
        .catch(() => {
          createCode()
          loginFormData.password = ""
        })
        .finally(() => {
          loading.value = false
        })
  } else {
    console.error("表单校验不通过", firstError)
  }
}
/** 创建验证码 */
const createCode = () => {
  // 先清空验证码的输入
  loginFormData.code = ""
  // 获取验证码
  codeUrl.value = ""
  getLoginCodeApi().then((res) => {
    codeUrl.value = res.data
  })
}

/** 初始化验证码 */
createCode()

const handleClear = () => {
  form.value.clearValidate();
};
</script>

<template>
  <div class="login-container">
    <ThemeSwitch class="theme-switch"/>
    <div class="login-card">
      <div class="title">
        <img :src="activeThemeName==='dark' ? logoText1 : logoText2"/>
      </div>
      <div class="content">
        <t-form ref="form" :data="loginFormData" :rules="loginFormRules" @submit="handleLogin" label-align="left">
          <t-form-item label="用户名" name="username">
            <t-input v-model="loginFormData.username"></t-input>
          </t-form-item>
          <t-form-item label="密码" name="password">
            <t-input v-model="loginFormData.password" type="password"></t-input>
          </t-form-item>
          <t-form-item label="验证码" name="code">
            <t-input v-model="loginFormData.code"></t-input>
            <t-image
                :src="codeUrl"
                @click="createCode"
                :style="{ width: '120px', height: '32px' }"
                error="加载失败"
                shape="round"
            />
          </t-form-item>

          <t-space class="btns">
            <t-button :loading="loading" theme="primary" variant="base" type="submit" style="width: 260px;">登录
            </t-button>
            <t-button theme="default" variant="base" @click="handleClear" type="reset" style="width: 70px;">重填
            </t-button>
          </t-space>
        </t-form>
      </div>
      <!--      <div class="content">-->
      <!--        <el-form ref="loginFormRef" :model="loginFormData" :rules="loginFormRules" @keyup.enter="handleLogin">-->
      <!--          <el-form-item prop="username">-->
      <!--            <el-input-->
      <!--                v-model.trim="loginFormData.username"-->
      <!--                placeholder="用户名"-->
      <!--                type="text"-->
      <!--                tabindex="1"-->
      <!--                :prefix-icon="User"-->
      <!--                size="large"-->
      <!--            />-->
      <!--          </el-form-item>-->
      <!--          <el-form-item prop="password">-->
      <!--            <el-input-->
      <!--                v-model.trim="loginFormData.password"-->
      <!--                placeholder="密码"-->
      <!--                type="password"-->
      <!--                tabindex="2"-->
      <!--                :prefix-icon="Lock"-->
      <!--                size="large"-->
      <!--                show-password-->
      <!--            />-->
      <!--          </el-form-item>-->
      <!--          <el-form-item prop="code">-->
      <!--            <el-input-->
      <!--                v-model.trim="loginFormData.code"-->
      <!--                placeholder="验证码"-->
      <!--                type="text"-->
      <!--                tabindex="3"-->
      <!--                :prefix-icon="Key"-->
      <!--                maxlength="7"-->
      <!--                size="large"-->
      <!--            >-->
      <!--              <template #append>-->
      <!--                <el-image :src="codeUrl" @click="createCode" draggable="false">-->
      <!--                  <template #placeholder>-->
      <!--                    <el-icon>-->
      <!--                      <Picture />-->
      <!--                    </el-icon>-->
      <!--                  </template>-->
      <!--                  <template #error>-->
      <!--                    <el-icon>-->
      <!--                      <Loading />-->
      <!--                    </el-icon>-->
      <!--                  </template>-->
      <!--                </el-image>-->
      <!--              </template>-->
      <!--            </el-input>-->
      <!--          </el-form-item>-->
      <!--          <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin">登 录</el-button>-->
      <!--        </el-form>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;

  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }

  .login-card {
    width: 400px;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      //background-color: #629dff;
      width: 100%;
      padding: 0 0 0 30px;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 32px;

      img {
        height: 50px;
        width: 130px;
      }
    }

    .content {
      border-radius: 6px;
      width: 100%;
      //background-color: white;
      padding: 20px 30px 50px 30px;

      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
      }

      .btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
