import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service from'../views/service.vue'
import Faqs from'../views/faqs.vue'
import Gallery from'../views/gallery.vue'
import Helpcenter from'../views/helpcenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: Faqs
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },{
    path: '/helpcenter',
    name: 'helpcenter',
    component: Helpcenter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
