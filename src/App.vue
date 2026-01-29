<template>
<!-- <div class='body-base phone:(bg-black) pc:(bg-[#78350f])'> -->
<div class='body-base'>

  <RouterView />

</div>
</template>
<script setup name='App'>
import { RouterView } from 'vue-router';

</script>
<style>
body {
  background:#080a26;
}

.g-model-width {
  width:100%; max-width:1240px; margin:0 auto;
}

.g-overflow {
  overflow:hidden;
  -webkit-backface-visibility:hidden;
  -webkit-transform:translate3d(0, 0, 0);
}

@screen phone {
  .body-base {
    font-size:14px;
  }
}
@screen pc {
  .body-base {
    font-size:16px;
  }
}
</style>
