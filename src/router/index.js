import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import logIn from '../views/logIn.vue'
import forgotPassword from '../views/forgotPassword.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'logIn',
    component: logIn
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: forgotPassword
  },
  
  {
    path: '/homeView',
    name: 'homeView',
    component: HomeView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
