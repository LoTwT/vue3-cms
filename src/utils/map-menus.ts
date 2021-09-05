import { IBreadcrumb } from "@/base-ui/breadcrumb"
import { RouteRecordRaw } from "vue-router"

export let firstMenu: any = null

export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 1. 所有的预设 routes 的集合
  const presetRoutes: RouteRecordRaw[] = []
  // https://cn.vitejs.dev/guide/features.html#glob-import
  // https://github.com/mrmlnc/fast-glob#pattern-syntax
  const routeFiles = import.meta.globEager("../router/main/**/*.ts")
  Object.values(routeFiles).forEach((module) =>
    presetRoutes.push(module.default),
  )

  // 2. 根据权限获取需要添加的 routes
  // userMenus:
  // type === 1 => children => type === 1
  // type === 2 => url => route
  // 递归查找
  const _recurseRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = presetRoutes.find(
          (presetRoute) => presetRoute.path === menu.url,
        )
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu
      } else _recurseRoutes(menu.children)
    }
  }

  _recurseRoutes(userMenus)

  return routes
}

export const mapPathToMenu = (
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[],
): any => {
  for (const menu of userMenus) {
    // 有 submenu 需要递归查找
    if (menu.type === 1) {
      const foundMenu = mapPathToMenu(menu.children ?? [], currentPath)
      if (foundMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: foundMenu.name })
        return foundMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) return menu
  }
}

export const mapBreadcrumbs = (userMenus: any[], currentPath: string) => {
  const breadcrumbs: IBreadcrumb[] = []

  mapPathToMenu(userMenus, currentPath, breadcrumbs)

  return breadcrumbs
}
