<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  name: 'Child1',
  data() {
    return {
      msg: '子组件一'
    }
  },
  methods: {
    fn(sign) {
      confirm(`sign: ${sign}`);
    }
  }
}
</script>