<script setup lang='ts'>
import navigation from './mock'
</script>

<template>
  <nav>
    <ul class="flex items-center space-x-5">
      <li v-for="item in navigation" :key="item.id">
        <nuxt-link
          class="transition duration-150 ease-in-out hover:text-yellow-300 focus:text-yellow-300 text-xs [&.router-link-exact-active]:text-yellow-300"
          :to="localePath(item.link)"
        >
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
