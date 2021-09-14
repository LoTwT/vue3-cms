import { ILoginState } from "./login/types"
import { ISystemState } from "./main/system/types"

export interface IBaseState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IBaseWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStore = IBaseState & IBaseWithModule
