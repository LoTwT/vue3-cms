export const enum EFormType {
  INPUT = "INPUT",
  PASSWORD = "PASSWORD",
  SELECT = "SELECT",
  DATE_PICKER = "DATE_PICKER",
}

export interface IFormItem {
  type: EFormType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}
