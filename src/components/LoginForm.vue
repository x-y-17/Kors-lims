<template>
  <el-form
    ref="ruleFormRef"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input
        v-model="loginUser.userName"
        placeholder="请输入用户名..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="请输入密码..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin(ruleFormRef)"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref } from "vue";
import type { FormInstance } from "element-plus";
import { User } from "@/utils/loginValidators";
export default {
  props: {
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const ruleFormRef = ref<FormInstance>();
    const loginUser = ref<User>({
      userName: "",
      password: "",
    });

    // 触发登录方法
    const handleLogin = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log(loginUser);
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    return { handleLogin, loginUser, ruleFormRef };
  },
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
