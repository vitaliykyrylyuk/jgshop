<script setup>
import { useProductStore } from '@/stores/ProductStore'
// import { useCartStore } from '@/stores/CartStore'
const productStore = useProductStore()
// const cartStore = useCartStore()
productStore.fill()
// const addToCart = (count, product) => {
//   count = parseInt(count)
//   for (let index =
//     0;
//     index <
//        count; index++) { ex++ }
// }
</script>
<template>
  <HomepageMainSlider />
  <ProductList :products="productStore.products" />
</template>
