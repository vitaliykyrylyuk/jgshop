<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
    default: null
  }
})

</script>
<template>
  <div class="container mx-auto grid grid-cols-4 gap-4">
    <ProductCard
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
  </div>
</template>
