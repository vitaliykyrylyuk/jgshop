<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
    default: null
  }
})

</script>
<template>
  <div class="flex justify-center">
    <div
      class="block max-w-sm bg-white shadow-lg"
    >
      <a
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <NuxtImg
          :src="`https://picsum.photos/750/500?random=${Math.floor(Math.random() * 10)}`"
          :alt="product.name"
          loading="lazy"
        />
      </a>
      <div class="p-6">
        <h5
          class="mb-2 text-xl font-medium leading-tight text-neutral-800"
        >
          {{ product.name }}
        </h5>
        <p class="mb-4 text-base text-neutral-600">
          {{ product.description }}
        </p>
        <p class="mb-4 text-base text-neutral-600">
          {{ product.price }}
        </p>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
