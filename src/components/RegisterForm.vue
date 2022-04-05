<template>
  <el-form
    ref="ruleFormRef"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input
        v-model="registerUser.userName"
        placeholder="请输入用户名..."
      ></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input
        v-model="registerUser.phone"
        placeholder="请输入手机号..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="请输入密码..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="请再次输入密码..."
      ></el-input>
    </el-form-item>

    <el-form-item label="选择身份" prop="role">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="司机" value="user"></el-option>
        <el-option label="货主" value="visitor"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister(ruleFormRef)"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref } from "vue";
import { RegisterUser } from "@/utils/registerValidators";
import type { FormInstance, Action } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";
// import axios from 'axios' // 仅限在当前组件使用
export default {
  props: {
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const ruleFormRef = ref<FormInstance>();
    const registerUser = ref<RegisterUser>({
      userName: "",
      phone: "",
      password: "",
      password2: "",
      role: "",
    });

    // 触发注册方法
    const handleRegister = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          //确认两次输入的密码是否一致
          //此处的问题在于利用element-plus的校验规则进行判断时，抽离后的自定义检验函数不知道怎么判断变量
          if (registerUser.value.password !== registerUser.value.password2) {
            ElMessageBox.alert("两次输入的密码不一致", "提示", {
              confirmButtonText: "确认",
              callback: () => {
                ElMessage({
                  type: "info",
                  message: "请确认输入密码是否正确",
                });
              },
            });
            return;
          }
          console.log(registerUser);
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    return { handleRegister, registerUser, ruleFormRef };
  },
};
</script>
<style scoped></style>
