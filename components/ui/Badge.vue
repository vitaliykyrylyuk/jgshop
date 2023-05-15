<script setup lang='ts'>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <span class="absolute px-1 h-4 leading-4 font-bold text-gray-900 text-[10px] bg-yellow-400 rounded-full -top-1 right-1">
    {{ text }}
  </span>
</template>
