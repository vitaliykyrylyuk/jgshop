<script setup lang='ts'>
</script>

<template>
  <div class="relative flex flex-col items-center p-2 cursor-pointer mb-auto">
    <Icon name="AccountIcon" size="19" />
    <span class="mt-auto text-xs font-bold whitespace-nowrap">
      {{ $t('header.signIn') }}
    </span>
    <UiRipple color="rgb(224 177 26 / .3)" />
  </div>
</template>
