// 表单验证规则
export const accountFormRules = {
  username: [
    { required: true, message: "用户名为必填项", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是 5 - 10 位字母或者数字",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "密码为必填项", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: "密码必须是 6 位以上字母或者数字",
      trigger: "blur",
    },
  ],
}
