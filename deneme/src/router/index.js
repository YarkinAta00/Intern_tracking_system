import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../Welcome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: () => import('../LoginPage.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../HomePage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/interns',
      name: 'Interns',
      component: () => import('../Interns.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/applicants',
      name: 'Applicants',
      component: () => import('../Applicants.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/apply',
      name: 'ApplyNow',
      component: () => import('../ApplyJobs.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/internprofile/:id',
      name: 'InternProfile',
      component: () => import('../InternProfile.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/addposition',
      name: 'addPosition',
      component: () => import('../AddPosition.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/applicationform',
      name: 'applicationform',
      component: () => import('../ApplicationForm.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../Tasks.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/addtask',
      name: 'addtask',
      component: () => import('../AddTasks.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../Register.vue'),
      meta: { requiresAuth: true }
    },
    
  ]
})


export default router
