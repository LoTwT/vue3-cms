import { ILoginState } from "./login/types"

export interface IBaseState {
  name: string
  age: number
}

export interface IBaseWithModule {
  login: ILoginState
}

export type IStore = IBaseState & IBaseWithModule
