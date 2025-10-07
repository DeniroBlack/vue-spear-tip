import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from './About.vue'
import Documentation from './Documentation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router