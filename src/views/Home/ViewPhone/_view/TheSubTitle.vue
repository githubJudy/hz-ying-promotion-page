<template>
<div class='w-full mb-[20px] py-[4px]'>

  <div class='g-phone-width flex'>
    <div class='tst_name text-[18px] text-[white] flex-shrink-0'>{{name}}</div>

    <div class='flex-1'>
      <slot></slot>
    </div>
  </div>

</div>
</template>
<script setup name='TheSubTitle'>
import { defineProps } from 'vue';

defineProps({
  name: String,
})

</script>
<style scoped>
.tst_name {
  position:relative;
}
  .tst_name:after {
    content:'';
    background:linear-gradient(-90deg, #2d61ff, rgba(80, 119, 237, .4));
    width:30px; height:3px;
    position:absolute; bottom:-10px; left:4px;
  }
</style>
