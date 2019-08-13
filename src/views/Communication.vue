<template>
  <div>
    <h1>组件通讯</h1>
    <router-link to="/communication/parent_to_child">父传子</router-link> |
    <router-link to="/communication/child_to_parent">子传父</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>