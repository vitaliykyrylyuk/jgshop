<script setup lang='ts'>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const isMenuOpen = ref(false)

const categories = [
  { name: 'Beard' },
  { name: 'Hair' },
  { name: 'Cutting' },
  { name: 'Shaving' },
  { name: 'Styling' },
  { name: 'Equipment' },
  { name: 'Accessories' }
]
</script>

<template>
  <div class="flex space-x-2">
    <UiMenuToggle
      :is-menu-open="isMenuOpen"
      class="mr-5"
      @toggle-menu="isMenuOpen = !isMenuOpen"
    />
    <TransitionRoot as="template" :show="isMenuOpen">
      <Dialog as="div" class="relative z-20" @close="isMenuOpen = false">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/40 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="-translate-x-full"
              >
                <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                  <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <div class="absolute right-0 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button type="button" class="rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" @click="isMenuOpen = false">
                        <span class="sr-only">Close panel</span>
                        <UiMenuToggle is-menu-open="false" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div class="flex h-full flex-col bg-white py-6 shadow-xl">
                    <div class="px-4 sm:px-6">
                      <DialogTitle class="text-base font-semibold leading-6 text-gray-900">
                        {{ $t('header.catalog') }}
                      </DialogTitle>
                    </div>
                    <div class="w-full flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      <div class="p-4">
                        <div v-for="item in categories" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 ease-in-out duration-300">
                          <div>
                            <span class="font-semibold text-gray-900 hover:text-yellow-300 ease-in-out duration-300 cursor-pointer">
                              {{ item.name }}
                              <span class="absolute inset-0" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
