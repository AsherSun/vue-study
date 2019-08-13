<template>
  <button @click="clickHandle">{{msg}}</button>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      msg: '子组件'
    }
  },
  methods: {
    clickHandle() {
      this.$emit('custom', '事件传递的数据')
    }
  }
}
</script>