<template>
  <div>
    <h2>AncestorsChild</h2>
    <h3>不可变数据</h3>
    foo: {{foo}} <br />
    obj: {{obj}} <br />
    dataObj: {{dataObj}}
    <h3>可更改数据</h3>
    dataObj: {{ancestors.dataObj}}
    <Progeny></Progeny>
  </div>
</template>

<script>
import Progeny from './Progeny'
export default {
  name: 'AncestorsChild',
  components: {
    Progeny,
  },
  // inject: ['foo', 'obj', 'ancestors', 'dataObj'],
  inject: {
    foo: { from: 'testFrom', default: 'foo' },
    obj: { default: () => ({}) },
    ancestors: { default: () => ({}) },
    dataObj: { default: () => ({}) },
  },
  created() {
    // eslint-disable-next-line
    console.log(this);
  }
}
</script>