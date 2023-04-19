import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../Welcome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../HomePage.vue')
    },
    {
      path: '/interns',
      name: 'Interns',
      component: () => import('../Interns.vue')
    },
    {
      path: '/applicants',
      name: 'Applicants',
      component: () => import('../Applicants.vue')
    },
    {
      path: '/apply',
      name: 'ApplyNow',
      component: () => import('../ApplyJobs.vue')
    },
    {
      path: '/internprofile',
      name: 'InternProfile',
      component: () => import('../InternProfile.vue')
    },
    {
      path: '/addposition',
      name: 'addPosition',
      component: () => import('../AddPosition.vue')
    },
  ]
})

export default router
