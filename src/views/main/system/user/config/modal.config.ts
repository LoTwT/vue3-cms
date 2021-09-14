import { EFormType, IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  formItems: [
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
      field: "password",
      type: EFormType.PASSWORD,
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      field: "cellphone",
      type: EFormType.INPUT,
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      field: "departmentId",
      type: EFormType.SELECT,
      label: "选择部门",
      placeholder: "请选择部门",
      options: [],
    },
    {
      field: "roleId",
      type: EFormType.SELECT,
      label: "选择角色",
      placeholder: "请选择角色",
      options: [],
    },
  ],
  colLayout: { span: 24 },
  itemStyle: {},
}
