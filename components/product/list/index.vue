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
  <div class="lg:max-w-screen-lg lg:mx-auto grid grid-cols-products gap-6 px-3 mt-6">
    <ProductCard
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
  </div>
</template>
