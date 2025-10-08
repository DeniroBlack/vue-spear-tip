import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from './About.vue'
import Documentation from './Documentation.vue'
import Donate from './Donate.vue'

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
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router