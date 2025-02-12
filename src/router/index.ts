import { createRouter, createWebHistory } from 'vue-router'
import PokemonListPage from '@/views/PokemonListPage.vue'
import PokemonDetailPage from '@/views/PokemonDetailPage.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'list', component: PokemonListPage },
    { path: '/detail/:id', name: 'detail', component: PokemonDetailPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView,
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue'),
  //   },
  // ],
})

export default router
