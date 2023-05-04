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
      path: '/internprofile/:id',
      name: 'InternProfile',
      component: () => import('../InternProfile.vue')
    },
    {
      path: '/addposition',
      name: 'addPosition',
      component: () => import('../AddPosition.vue')
    },
    {
      path: '/applicationform',
      name: 'applicationform',
      component: () => import('../ApplicationForm.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../Tasks.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../Register.vue')
    },
  ]
})

export default router
