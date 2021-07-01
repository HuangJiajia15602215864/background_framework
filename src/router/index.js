import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/user/login4'),
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
      meta: {
        title: 'Dashboard',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/component',
    component: Layout,
    redirect: '/component/table',
    name: 'Component',
    meta: {
      title: 'element组件',
      icon: 'el-icon-eleme'
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/component/table'),
        meta: {
          title: '表格',
          icon: 'table'
        }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/component/form'),
        meta: {
          title: '表单',
          icon: 'form'
        }
      },
      {
        path: 'datePicker',
        name: 'datePicker',
        component: () => import('@/views/component/datePicker'),
        meta: {
          title: '日期选择器',
          icon: 'datePicker'
        }
      },
      {
        path: 'dragSelect',
        name: 'dragSelect',
        component: () => import('@/views/component/dragSelect'),
        meta: {
          title: '拖拽选择器',
          icon: 'dragSelect'
        }
      },
    ]
  },
  {
    path: '/basic',
    component: Layout,
    redirect: '/basic/input',
    name: 'basic',
    meta: {
      title: '基础组件',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'input',
        name: 'input',
        component: () => import('@/views/basic/input'),
        meta: {
          title: '输入框',
          icon: 'earth'
        }
      },{
        path: 'ring',
        name: 'ring',
        component: () => import('@/views/basic/ring'),
        meta: {
          title: '圆环',
          icon: 'earth'
        }
      },{
        path: 'generate',
        name: 'generate',
        component: () => import('@/views/basic/generate'),
        meta: {
          title: '圆环',
          icon: 'earth'
        }
      },
    ]
  },
  {
    path: '/plug',
    component: Layout,
    redirect: '/plug/i18n',
    name: 'Plug',
    meta: {
      title: '插件',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'i18n',
        name: 'I18n',
        component: () => import('@/views/plug/i18n'),
        meta: {
          title: '国际化',
          icon: 'earth'
        }
      },
      {
        path: 'drag',
        name: 'drag',
        component: () => import('@/views/plug/drag'),
        meta: {
          title: '拖拽',
          icon: 'drag'
        }
      },
      {
        path: 'count',
        name: 'count',
        component: () => import('@/views/plug/count'),
        meta: {
          title: '数字滚动',
          icon: 'count'
        }
      }
    ]
  },

  {
    path: '/chart',
    component: Layout,
    redirect: '/chart/line',
    name: 'chart',
    meta: {
      title: 'E-charts',
      icon: 'chart'
    },
    children: [{
        path: 'line',
        name: 'line',
        component: () => import('@/views/chart/line'),
        meta: {
          title: '折线图',
          icon: 'line'
        }
      },
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/chart/bar'),
        meta: {
          title: '柱状图',
          icon: 'bar'
        }
      },
      {
        path: 'pie',
        name: 'pie',
        component: () => import('@/views/chart/pie'),
        meta: {
          title: '饼图+富文本',
          icon: 'pie'
        }
      },
      {
        path: 'map',
        name: 'map',
        component: () => import('@/views/chart/map'),
        meta: {
          title: '地图',
          icon: 'map'
        }
      },
      {
        path: 'radar',
        name: 'radar',
        component: () => import('@/views/chart/radar'),
        meta: {
          title: '雷达图',
          icon: 'radar'
        }
      },
      {
        path: 'heatMap',
        name: 'heatMap',
        component: () => import('@/views/chart/heatMap'),
        meta: {
          title: '热力图',
          icon: 'heatMap'
        }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/chart/tree'),
        meta: {
          title: '树图',
          icon: 'tree'
        }
      },
      {
        path: 'funnel',
        name: 'funnel',
        component: () => import('@/views/chart/funnel'),
        meta: {
          title: '漏斗图',
          icon: 'funnel'
        }
      },
      {
        path: 'gauge',
        name: 'gauge',
        component: () => import('@/views/chart/gauge'),
        meta: {
          title: '仪表盘',
          icon: 'gauge'
        }
      },
      {
        path: 'pictorialBar',
        name: 'pictorialBar',
        component: () => import('@/views/chart/pictorialBar'),
        meta: {
          title: '象形柱图',
          icon: 'pictorialBar'
        }
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/views/chart/calendar'),
        meta: {
          title: '日历坐标系',
          icon: 'calendar'
        }
      },
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
