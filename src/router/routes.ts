export const stiticRoutes = [
  {
    // 登录路由
    path: '/login',
    component: () => import('@/views/login/IndexPage.vue'),
    name: 'login'
  },
  {
    path: '/',
    component: () => import('@/views/login/IndexPage.vue'),
    name: 'index'
  },
  {
    path: '/404',
    component: () => import('@/views/404/Index404Page.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any'
  }
]
