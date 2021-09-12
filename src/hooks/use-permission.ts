import { useStore } from "@/store"

export const usePermission = (pageName: string, handleName: string) => {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName.toLowerCase()}:${handleName}`

  return !!permissions.find((item) => item === verifyPermission)
}
