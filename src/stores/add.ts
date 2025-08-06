 import {computed, ref} from 'vue'
 import { defineStore } from 'pinia'
 import type { Product } from '@/types/product'
 import { useUserStore } from './user'
 
 
 export const usePlanStore = defineStore('plan', () => {
   const user = useUserStore()
   const products = ref<Product[]>([])
 
   const planRead = computed(() => {
    
   const all = products.value.length
     
   
 
     if (user.isAuthorized) {
       return all * user.personalDiscount
     }
 
     return all
   })
 
  function addToPlan(product: Product) {
    products.value.push(product)
  }
 
  
   function removeFromCart(product: Product) {
     const index = products.value.indexOf(product)
     products.value.splice(index, 1)
   }
 
   function hasProductInCart(product: Product) {
     return products.value.find(item => item.id === product.id)
   }
 
   return {
     products,
     planRead,
     addToPlan,
     removeFromCart,
     hasProductInCart
   }
 })
 

 
    