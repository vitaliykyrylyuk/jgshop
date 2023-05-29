<script setup lang='ts'>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

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
  <Popover v-slot="{ open }">
    <PopoverButton class="relative inline-flex leading-6 text-white items-center w-[190px] h-9 text-xs font-semibold uppercase transition duration-150 ease-in-out bg-yellow-400 hover:bg-yellow-300 focus:outline-none pl-8">
      <UiMenuToggle :is-menu-open="open" class="absolute scale-75 left-2 text-white" />
      {{ $t('header.catalog') }}
      <Icon name="CaretIcon" size="12" class="ml-2 rotate-90" />
      <UiRipple />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverPanel class="absolute -z-10 left-0 top-0 flex w-full pt-20">
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
      </PopoverPanel>
    </transition>
  </Popover>
</template>
