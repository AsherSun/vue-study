<template>
  <div>
    {{msg}}
    <child></child>
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
    fn(params) {
      this.msg = params;
      alert(params);
    }
  }
}
</script>
