import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../views/BookConsultationView.vue')
    },
    {
      path: '/consultations',
      name: 'consultations',
      component: () => import('../views/MyConsultationsView.vue')
    }
  ]
})

export default router
