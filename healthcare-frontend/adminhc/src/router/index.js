import Vue from 'vue'
import VueRouter from 'vue-router'
import Appointment from '../components/Appointment'
import Department from '../components/Department'
import Doctors from '../components/Doctors'
import Faq from '../components/Faq'
import Stories from '../components/Stories'
import Testimonials from '../components/Testimonial'
import Contact from '../components/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment
  },
  {
    path: '/department',
    name: 'Department',
    component: Department
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: Doctors
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
