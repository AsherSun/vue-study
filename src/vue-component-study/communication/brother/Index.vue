<template>
  <div>
    <h1>兄弟组件通讯</h1>
    <Brother1></Brother1>
    <Brother2></Brother2>
  </div>
</template>

<script>
import Brother1 from './Brother1.vue';
import Brother2 from './Brother2.vue';
export default {
  components: {
    Brother1,
    Brother2,
  }
}
</script>