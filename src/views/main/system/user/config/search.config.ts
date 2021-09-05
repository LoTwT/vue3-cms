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
      type: EFormType.INPUT,
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      type: EFormType.PASSWORD,
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      type: EFormType.SELECT,
      label: "性别",
      placeholder: "请选择性别",
      options: [
        { title: "男", value: "male" },
        { title: "女", value: "female" },
      ],
    },
    {
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
