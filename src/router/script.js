import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // alias: '/',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/sologan',
    name: 'sologan',
    component: () => import('../views/SologanPage.vue')
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/contact-me',
    name: 'contact-me',
    component: () => import('../views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
