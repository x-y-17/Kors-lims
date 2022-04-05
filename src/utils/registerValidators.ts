import { ref } from "vue";

export interface RegisterUser {
  userName: string;
  phone: string;
  password: string;
  password2: string;
  role: string;
}

export interface RegisterRules {
  userName: (
    | {
        message: string;
        required: boolean;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  phone: (
    | {
        message: string;
        required: boolean;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  password2: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  role: {
    message: string;
    required: boolean;
    trigger: string;
  };
}

export const registerRules = ref<RegisterRules>({
  userName: [
    {
      message: "用户名不能为空!",
      required: true,
      trigger: "blur",
    },
    {
      min: 2,
      max: 30,
      message: "长度在2到30个字符!",
      trigger: "blur",
    },
  ],
  phone: [
    {
      message: "手机号不能为空!",
      required: true,
      trigger: "blur",
    },
    {
      min: 11,
      max: 11,
      message: "手机号码长度应为11位!",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空!",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码的长度应在6-30位!",
      trigger: "blur",
    },
  ],
  password2: [
    {
      required: true,
      message: "再次输入的密码不能为空!",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码的长度应在6-30位!",
      trigger: "blur",
    },
  ],
  role: {
    message: "请选择注册的角色!",
    required: true,
    trigger: "blur",
  },
});
