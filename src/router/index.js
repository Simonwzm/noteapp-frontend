import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import newLoginView from '../views/newLoginView.vue'
import newRegisterView from '../views/newRegisterView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/auth/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/login',
    name:'newLogin',
    component: newLoginView,
  },
  {
    path: '/register',
    name: 'newRegister',
    component: newRegisterView,
  },
]

const router = new VueRouter({
  routes
})
export default router
