<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  name: 'Child1',
  data() {
    return {
      msg: '子组件二'
    }
  },
  methods: {
    fn() {
      alert('被调用的子组件方法');
    }
  }
}
</script>