<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import type { Product } from '@/types/product';
import { storeToRefs } from 'pinia';
import ProductsFirst from '@/views/ProductFirst.vue'
import ProductsView from '@/views/ProductsView.vue';
import { useUserStore } from '@/stores/user'


const counter = useCounterStore()

const user = useUserStore()

</script>

<template>
  <main class="example">
    Выберите книгу
  </main>
 <ProductsView v-if="user.isAuthorized"/>
 <ProductsFirst />


</template>

<style >
.example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  font-size: 30px;
  font-style: italic;

}



</style>