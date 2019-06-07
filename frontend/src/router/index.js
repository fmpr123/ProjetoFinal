import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import teste from '@/components/teste'

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
    }
  ]
})
