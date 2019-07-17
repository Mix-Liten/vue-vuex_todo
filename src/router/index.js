import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes: [{
    path: '/',
    name: 'home',
    component: () => import(`@/views/Todo.vue`)
  }]
})

export default router