<script setup lang='ts'>
import { ref } from 'vue'
const compareQuantity = ref(17)
</script>

<template>
  <div class="relative flex flex-col items-center p-2 cursor-pointer mb-auto">
    <UiBadge :quantity="compareQuantity" />
    <Icon name="CompareIcon" size="24" class="mb-auto" />
    <UiRipple color="rgb(224 177 26 / .3)" />
  </div>
</template>
