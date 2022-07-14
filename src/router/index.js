import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/components/Home.vue'
import SupplyChainTimeTracking from '@/components/SupplyChain/SupplyChainTimeTracking.vue'

const routes = [
  {
    path: '/',
    name: 'SupplyChainTimeTracking',
    component: SupplyChainTimeTracking
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router