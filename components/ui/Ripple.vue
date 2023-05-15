<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Ripple from '~/types/ripple'

const props = defineProps({
  color: {
    type: String,
    default: 'rgba(255, 255, 255, 0.3)'
  },
  isRound: {
    type: Boolean,
    default: false
  }
})

// Border radius for Ripple is case it should be rounded
const radius = computed(() => {
  return props.isRound ? '999px' : '0'
})

const ripples = ref<Ripple[]>([])
const container = ref<HTMLElement | null>(null)

const addRipple = (event: MouseEvent) => {
  const { left, top } = container.value!.getBoundingClientRect()
  const rippleId = Date.now()

  ripples.value.push({
    width: `${rippleWidth.value}px`,
    height: `${rippleWidth.value}px`,
    left: `${event.clientX - left - halfRippleWidth.value}px`,
    top: `${event.clientY - top - halfRippleWidth.value}px`,
    id: rippleId
  })
}

const purgeRipples = () => {
  ripples.value = []
}

const rippleWidth = ref(0)
const halfRippleWidth = ref(0)

onMounted(() => {
  const width = container.value!.offsetWidth
  const height = container.value!.offsetHeight
  rippleWidth.value = width > height ? width : height
  halfRippleWidth.value = rippleWidth.value / 2

  window.addEventListener('mouseup', purgeRipples)
})

onBeforeUnmount(() => {
  window.removeEventListener('mouseup', purgeRipples)
})
</script>

<template>
  <div ref="container" class="ripple-outer" @mousedown="addRipple">
    <transition-group name="grow" tag="div" class="ripples">
      <div
        v-for="ripple in ripples"
        :key="ripple.id"
        :style="{
          top: ripple.top,
          left: ripple.left,
          width: ripple.width,
          height: ripple.height,
          background: color
        }"
        class="ripple"
      />
    </transition-group>
  </div>
</template>

<style lang='scss'>
.ripple-outer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: inline-flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: v-bind(radius);
  cursor: pointer;
}

.ripples {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ripple {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  transition: all 1500ms ease-out;
  pointer-events: none;
}

.grow-enter-from {
  transform: scale(0);
  opacity: 1;
}

.grow-enter-to {
  transform: scale(4);
  opacity: 1;
}

.grow-leave-from {
  transform: scale(4);
  opacity: 1;
}

.grow-leave-to {
  transform: scale(4);
  opacity: 0;
}
</style>
