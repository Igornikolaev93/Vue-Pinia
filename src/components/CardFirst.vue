<script lang="ts" setup>
import { usePlanStore } from '@/stores/add';
import {useCartStore} from '@/stores/cart';
import {useDoneStore} from '@/stores/done';
import type {Product} from '@/types/product';

defineProps<{
  product: Product
}>()

const cart = useCartStore()
const plan = usePlanStore()
const done = useDoneStore()


</script>

<template>

  <div class="product-card">
    <img class="product-card__image" :src="product.image" :alt="product.title" />
    <div class="product-card__name">
      {{ product.title }}
    </div>
    <div class="product-card__price">
      {{ product.authors }} 
    </div>
  </div>
</template>

<style scoped >
.product-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid var(--color-border);
  overflow: hidden;
  border-radius: 12px;
}

.product-card__image {
  height: 200px;
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  object-fit: cover;
}

.product-card__name {
  padding: 12px;
  flex: 1 1 auto;
}

.product-card__price {
  font-size: 1.2em;
  padding: 0 12px 12px 12px;
}

.product-card__button {
  margin: 8px;
  display: block;
  
}

.status{
  display: block;
}
</style>