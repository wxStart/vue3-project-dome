import { createRouter, createWebHistory } from 'vue-router'
import { stiticRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: stiticRoutes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
