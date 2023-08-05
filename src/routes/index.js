import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './HomeComponent'

export default createRouter({
  history: createWebHistory(),
  // 페이지 전환시 스크롤 위치 초기화
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: HomeComponent
    }
  ]
})
