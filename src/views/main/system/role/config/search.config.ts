import { EFormType, IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  formItems: [
    {
      field: "name",
      type: EFormType.INPUT,
      label: "角色名称",
      placeholder: "请输入角色名称",
    },
    {
      field: "intro",
      type: EFormType.INPUT,
      label: "权限介绍",
      placeholder: "请输入权限介绍",
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
