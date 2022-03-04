import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  // 指定路由模式
  history: createWebHistory(),
  // 路由地址
  routes: [
    {
      path: '/', // baby
      redirect: '/4asd6a',
    },
    {
      path: '/4asd6a', // baby
      name: 'Survey1',
      component: () => import('../components/Survey1.vue')
    },
    {
      path: '/5adfsf3', // classmate 瑄余
      name: 'Survey2',
      component: () => import('../components/Survey2.vue')
    }
  ]
})
