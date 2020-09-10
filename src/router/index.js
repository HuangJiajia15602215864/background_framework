import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/user/login'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/user/register'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import('@/views/error/403'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/component',
    component: Layout,
    redirect: '/component/table',
    name: 'Component',
    meta: { title: '组件库', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/component/table'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/component/form'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },
  {
    path: '/plug',
    component: Layout,
    redirect: '/plug/i18n',
    name: 'Plug',
    meta: { title: '插件', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'i18n',
        name: 'I18n',
        component: () => import('@/views/plug/i18n'),
        meta: { title: '国际化', icon: 'table' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
