<template>
  <div>
    <ancestors-child></ancestors-child>
    <button @click="changeDataObj">更改dataObj数据</button>
  </div>
</template>

<script>
import AncestorsChild from './AncestorsChild';
export default {
  name: 'Ancestors',
  components: {
    AncestorsChild,
  },
  data() {
    return {
      dataObj: {
        a: 'a',
        b: 'b',
      },
      count: 1,
    }
  },
  provide() {
    return {
      foo: 'bar',
      testFrom: 'testFrom',
      obj: {
        a: 'a',
        b: 'b',
      },
      ancestors: this,
      dataObj: this.dataObj,
    }
  },
  methods: {
    changeDataObj() {
      this.dataObj = {
        a: 'change_a' + this.count,
        b: 'change_b' + this.count,
      }
      this.count += 1;
    }
  }
  /**
  provide: {
    foo: 'bar',
    obj: {
      a: 'a',
      b: 'b',
    },
    // 拿不到 上下文对象
    ancestors: this,
  }
  */
}
</script>