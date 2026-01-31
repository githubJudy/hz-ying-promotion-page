<template>
<div class='vp_model'>

  <div class='g-phone-width text-[16px] text-[white] py-[10px]'>添加好友</div>
  <ListQrCode />

  <div class='g-phone-width text-[16px] text-[white] py-[10px]'>常用app</div>
  <ListApp />

  <div class='g-phone-width text-[16px] text-[white] py-[10px]'>常用工具下载</div>
  <ListTools />

  <div class='g-phone-width text-[16px] text-[white] py-[10px]'>常用浏览器下载</div>
  <ListBrowser />

  <div class='h-[40px]'></div>

  <PagePopup />

</div>
</template>
<script setup name='DownloadViewPC'>
import ListQrCode from './_view/ListQrCode.vue';
import ListApp from './_view/ListApp.vue';
import ListTools from './_view/ListTools.vue';
import ListBrowser from './_view/ListBrowser.vue';
import PagePopup from './_view/PagePopup.vue';

</script>
<style scoped>
</style>
