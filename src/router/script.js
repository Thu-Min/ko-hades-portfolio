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
  },
  {
    path: '/artwork/page=1',
    name: 'artwork-page1',
    component: () => import('../views/ArtworkPage.vue')
  },
  {
    path: '/artwork/page=2',
    name: 'artwork-page2',
    component: () => import('../views/ArtworkPageTwo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Scroll to the top of the page on route change
    return { x: 0, y: 0 };
  },
})

export default router
