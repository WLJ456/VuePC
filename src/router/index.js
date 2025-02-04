import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/', redirect: '/login' }
]

const router = new VueRouter({
  routes
})

export default router
