import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Contact from '../views/Contact.vue'
import Order from '../views/Order.vue'
import News from '../views/News.vue'
import Invoice from '../components/Invoice.vue'


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
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },

  {
    path: '/invoice/:id',
    name: 'Invoice',
    component: Invoice,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
