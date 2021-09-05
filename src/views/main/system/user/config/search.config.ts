import { EFormType, IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px",
  },
  colLayout: {
    span: 8,
  },
  formItems: [
    {
      field: "username",
      type: EFormType.INPUT,
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "password",
      type: EFormType.PASSWORD,
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      field: "gender",
      type: EFormType.SELECT,
      label: "性别",
      placeholder: "请选择性别",
      options: [
        { title: "男", value: "male" },
        { title: "女", value: "female" },
      ],
    },
    {
      field: "createTime",
      type: EFormType.DATE_PICKER,
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
}
