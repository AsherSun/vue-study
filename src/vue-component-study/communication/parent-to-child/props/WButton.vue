<template>
  <button class="w-button" :class="`w-button--${size}`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, validList) {
  return validList.includes(value);
}
export default {
  name: 'WButton',
  props: {
    size: {
      type: String,
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.w-button {
  &--small {
    height: 20px;
  }
}
</style>