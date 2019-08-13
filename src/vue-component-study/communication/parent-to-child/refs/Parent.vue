<template>
  <div>
    <child1 ref="child1"></child1>
    <child2 ref="child2"></child2>
    <button @click="changeChildData(0)">更改子组件一的数据</button>
    <button @click="changeChildData(1)">更改子组件二的数据</button>
    <button @click="callChildFn(0)">调用字组件一的方法</button>
    <button @click="callChildFn(1)">调用字组件二的方法</button>
  </div>
</template>

<script>
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
export default {
  components: {
    Child1,
    Child2,
  },
  methods: {
    changeChildData(sign) {
      sign ? this.$refs.child2.msg = '被更改的子组件二' : this.$refs.child1.msg = '被更改的子组件一';
    },
    callChildFn(sign) {
      sign ? this.$refs.child2.fn() : this.$refs.child1.fn();
    }
  }
}
</script>
