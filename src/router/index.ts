import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import { useUserStore } from '@/stores/user'
import CounterView from '@/views/CounterView.vue'
import ProductsFirst from '@/views/ProductFirst.vue'
import ProductMy from '@/views/ProductMy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
     component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductMy,
      meta: {
        requiredAuth: true
      }
    }
  ]
})

router.beforeEach((to) => {
  const user = useUserStore()

  if (to.meta.requiredAuth && !user.isAuthorized) {
    return '/'
  }
})

export default router
