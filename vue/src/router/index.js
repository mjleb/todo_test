import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/TodoList.vue')
  },
  {
    path: '/404', name: '404', component:  () => import('../views/404.vue')
},
{
    path: '/:catchAll(.*)', redirect:'404'
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router