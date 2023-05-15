<script setup lang='ts'>
import { ref } from 'vue'
const cartTotal = ref(17)
const cartQuantity = ref(17)
</script>

<template>
  <div class="relative flex flex-col items-center p-2 cursor-pointer mb-auto">
    <UiBadge :quantity="cartQuantity" />
    <Icon name="CartIcon" size="20" />
    <span class="mt-auto text-xs font-bold whitespace-nowrap">
      {{ cartTotal }} $
    </span>
    <UiRipple color="rgb(224 177 26 / .3)" />
  </div>
</template>
