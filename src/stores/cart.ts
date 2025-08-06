import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/product'
import { useUserStore } from './user'




export const useCartStore = defineStore('cart', () => {
  const user = useUserStore()
  const products = ref<Product[]>([])


  const fullPrice = computed(() => {
   return products.value
  })

 const addBook = computed(() => {
   return products.value.length
  })


  function addToCart(product: Product) {
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
    fullPrice,
    addBook,
    addToCart,
    removeFromCart,
    hasProductInCart
  }
})