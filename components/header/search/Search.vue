<script setup>
</script>

<template>
  <label class="relative block w-full sm:w-1/3 lg:w-auto">
    <span class="sr-only">Search</span>
    <span class="absolute inset-y-0 right-0 flex items-center pr-2">
      <Icon name="SearchIcon" size="18" />
    </span>
    <input
      class="w-full lg:w-[190px] h-9 placeholder:text-slate-400 placeholder:text-xs block bg-white border border-gray-900 py-2 pr-9 pl-3 focus:outline-none focus:border-yellow-300 sm:text-sm transition duration-150 ease-in-out"
      :placeholder="$t('header.searchProducts')"
      type="text"
      name="search"
    >
    <UiRipple color="" />
  </label>
</template>
