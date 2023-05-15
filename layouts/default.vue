<script setup></script>

<template>
  <SuperHeader class="hidden sm:block" />
  <Header />
  <div class="min-h-[50vh]">
    <slot />
  </div>
  <Footer />
</template>
