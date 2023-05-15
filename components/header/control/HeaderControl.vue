<script setup lang='ts'>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: '20'
  },
  badgeText: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="relative flex flex-col items-center justify-center w-12 aspect-square cursor-pointer hover:text-yellow-400 duration-300 ease-in-out">
    <UiBadge v-if="badgeText" :text="badgeText" />
    <Icon :name="icon" :size="iconSize" />
    <span class="text-xs font-bold whitespace-nowrap min-h-[1em]">
      {{ label }}
    </span>
    <UiRipple color="rgb(224 177 26 / .3)" is-round />
  </div>
</template>
