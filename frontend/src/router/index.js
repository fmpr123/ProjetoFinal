import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import teste from '@/components/teste'
import signup from '@/components/signup'
import main from '@/components/main'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/teste',
      name: 'teste',
      component: teste
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
  }
  ]
})
