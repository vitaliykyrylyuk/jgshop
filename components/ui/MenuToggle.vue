<script setup lang='ts'>
defineEmits(['toggleMenu'])
defineProps({
  isMenuOpen: Boolean
})
</script>

<template>
  <span
    class="navbar-toggle"
    :class="{'navbar-toggle--collapsed': isMenuOpen}"
    type="button"
    @click="$emit('toggleMenu')"
  >
    <span /><span /><span />
  </span>
</template>

<style lang="scss" scoped>
.navbar-toggle {
  display: inline-flex;
  flex-flow: column wrap;
  justify-content: center;
  cursor: pointer;

  span {
    display: block;
    width: 20px;
    border: 1px solid currentcolor;
    transition: .3s;

    + span {
      margin-top: 4px;
    }
  }

  &--collapsed {
    span:nth-of-type(1) {
      position: absolute;
      margin: 0;
      transform: rotate(45deg);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      position: absolute;
      margin: 0;
      transform: rotate(-45deg);
    }
  }
}
</style>
