// 账号登录表单验证规则
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

// 手机号登录表单验证规则
export const phoneFormRules = {
  number: [
    { required: true, message: "手机号为必填项", trigger: "blur" },
    { pattern: /^1[0-9]{10}$/, message: "请输入正确的手机号", trigger: "blur" },
  ],
  verifyCode: [
    { required: true, message: "验证码为必填项", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{6}$/,
      message: "请输入正确的验证码",
      trigger: "blur",
    },
  ],
}
