import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/product'
import { useUserStore } from './user'


export const useDoneStore = defineStore('done', () => {
  const user = useUserStore()
  const products = ref<Product[]>([])

  const writeBook = computed(() => {
    //const all = products.value.reduce((sum, product) => sum + Number(product.price), 0)
    const all = products.value.length
    
  

    if (user.isAuthorized) {
      return all * user.personalDiscount
    }

    return all
  })

  function addToDone(product: Product) {
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
    writeBook,
    addToDone,
    removeFromCart,
    hasProductInCart
  }
})