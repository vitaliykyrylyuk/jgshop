<script setup lang='ts'>
const categories = ref([
  'news',
  'top',
  'sale'
])

</script>
<template>
  <nav class="flex divide-x divide-gray-900">
    <nuxt-link
      v-for="category in categories"
      :key="category"
      :to="localePath(`/${category}`)"
      class="relative text-xs px-9 py-2 leading-none uppercase"
    >
      <span class="border-gray-900 [.router-link-exact-active_&]:border-b transition duration-150 ease-in-out hover:border-b font-bold pb-0.5">
        {{ category }}
      </span>
      <UiRipple color="rgb(224 177 26 / .3)" />
    </nuxt-link>
  </nav>
</template>
