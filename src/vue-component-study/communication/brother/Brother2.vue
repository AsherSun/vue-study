<template>
  <div>
    组件二: {{msg}}
    <button @click="clickHandle">
      修改组件一数据
    </button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      msg: 'default',
      count: 0,
    }
  },
  created() {
    this.$parent.$on('change-2-data', this.changeHandle)
  },
  methods: {
    clickHandle() {
      this.count += 1;
      this.$parent.$emit('change-1-data', this.count)
    },
    changeHandle(params) {
      this.msg = params;
    }
  }
}
</script>
