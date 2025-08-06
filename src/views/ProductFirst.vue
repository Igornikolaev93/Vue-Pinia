<script setup lang="ts">
//import ProductCard from '@/components/ProductCard.vue';
import {useCartStore} from '@/stores/cart';
import {computed, ref} from 'vue';
import { storeToRefs } from 'pinia';
import type { Product } from '@/types/product';
import {usePlanStore} from '@/stores/add';
import {useDoneStore} from '@/stores/done';
import CardFirst from '@/components/CardFirst.vue'


const { fullPrice } = storeToRefs(useCartStore())

const {planRead} = storeToRefs(usePlanStore())

const {writeBook} = storeToRefs(useDoneStore())

const isLoading = ref(false)
const products = ref<Product[]>([])


const message = ref('')

 async function loadProducts() {
  isLoading.value = true

 const res = await fetch('https://www.dbooks.org/api/recent')
 const data= await res.json()

 products.value = data.books

 isLoading.value = false
}

loadProducts()

const findItem = computed(()=>{
  let p =products.value;
  if(message.value){
   return p.filter((product)=> product.title.indexOf(message.value) !== -1)
  } 
  return p
});


</script>

<template>
  
  <div v-if="!isLoading">
   
    <div class="catalog">
      <CardFirst
      v-for = "product in findItem" 
       :key ="product.id"
       :product="product"
      />
    </div>
  </div>
  <div v-else>
    Loading books...
  </div>
</template>

<style >
.cart {
  margin-top: 24px;
  margin-bottom: 16px;
  
}

.catalog {
  width: 920px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2em;
}
</style>