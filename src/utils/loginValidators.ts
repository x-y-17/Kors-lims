import { ref } from "vue";

export interface User {
  userName: string;
  password: string;
}

interface Rules {
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
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
}

// 校验规则
export const rules = ref<Rules>({
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
  password: [
    {
      required: true,
      message: "密码不能为空!",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码长度应在6-30位!",
      trigger: "blur",
    },
  ],
});
