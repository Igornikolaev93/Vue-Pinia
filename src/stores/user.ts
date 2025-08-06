import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const personalDiscount = ref(1)
  const isAuthorized = ref(false)

  return {
    personalDiscount,
    isAuthorized
  }
})
