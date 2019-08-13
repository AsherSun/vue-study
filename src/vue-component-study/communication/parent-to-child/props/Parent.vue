<template>
  <div>
    <w-button>按钮1</w-button>
    <w-button size="small" disabled>按钮2</w-button>
    <!-- props 传入错误的值，控制台抛错 -->
    <w-button size="error">按钮3</w-button>
  </div>
</template>

<script>
import WButton from './WButton';
export default {
  components: {
    WButton,
  }
}
</script>
