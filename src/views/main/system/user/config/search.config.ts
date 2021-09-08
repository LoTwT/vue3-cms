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
      field: "id",
      type: EFormType.INPUT,
      label: "id",
      placeholder: "请输入 id",
    },
    {
      field: "name",
      type: EFormType.INPUT,
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "realname",
      type: EFormType.INPUT,
      label: "真实姓名",
      placeholder: "请输入真实姓名",
    },
    {
      field: "cellphone",
      type: EFormType.INPUT,
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      field: "enable",
      type: EFormType.SELECT,
      label: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 },
      ],
    },
    {
      field: "createAt",
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
