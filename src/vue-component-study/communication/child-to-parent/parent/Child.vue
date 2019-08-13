<template>
  <div>
    <button @click="clickHandle(1)">更改父组件数据</button>
    <button @click="clickHandle(0)">调用父组件方法</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  methods: {
    clickHandle(sign) {
      if (sign) {
        this.$parent.msg = '更改父组件数据';
        return;
      }
      this.$parent.fn('子组件传递的值')
    }
  }
}
</script>