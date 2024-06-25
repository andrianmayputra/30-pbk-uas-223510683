import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../views/Todos.vue'
import Posts from '../views/Posts.vue'
import Albums from '../views/Albums.vue'
import AlbumDetail from '../views/AlbumDetail.vue'

const routes = [
  {
    path: '/',
    redirect: '/todos'
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetail',
    component: AlbumDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
