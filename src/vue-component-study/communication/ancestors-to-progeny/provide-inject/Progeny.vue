<template>
  <div>
    <h2>Progeny</h2>
    <h3>不可变数据</h3>
    foo: {{foo}} <br />
    obj: {{obj}} <br />
    dataObj: {{dataObj}} <br />
    <h3>可更改数据</h3>
    dataObj: {{ancestors.dataObj}}
  </div>
</template>

<script>
export default {
  name: 'Progeny',
  inject: ['foo', 'obj', 'ancestors', 'dataObj']
}
</script>