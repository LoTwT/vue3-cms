import { ILoginState } from "./login/types"
import { IDashboardState } from "./main/analysis/types"
import { ISystemState } from "./main/system/types"

export interface IBaseState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IBaseWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStore = IBaseState & IBaseWithModule
