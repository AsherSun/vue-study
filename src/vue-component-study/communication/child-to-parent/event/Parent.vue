<template>
  <div>
    {{ msg }}
    <child @custom="customEventHandle"></child>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components: {
    Child,
  },
  data() {
    return {
      msg: '父组件数据'
    }
  },
  methods: {
    customEventHandle(params) {
      this.msg = '更改父组件数据 ---- ' + params;
    }
  }
}
</script>
