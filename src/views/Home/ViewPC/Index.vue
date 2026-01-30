<template>
<div class='vp_model'>

  <TheNavbar type='PC' />

  <TheSwiper />

  <TheSubTitle name='真人赌场' />
  <ViewZhenRen />

  <!-- <TheSubTitle name='体育' />
  <ViewTiYu />

  <TheSubTitle name='热门电游' />
  <ViewDianYou /> -->

  <div class='g-model-width mb-[20px] grid grid-cols-2 gap-x-[20px]'>
    <ViewZhongShenBang />

    <ViewYingJiaMiJi />
  </div>

  <!-- <TheSubTitle name='品牌赞助' />
  <ViewPinPaiZanZhu /> -->

  <div class='h-[60px]'></div>

  <ViewBottom />

  <div class='g-model-width text-[14px] text-[#848484] text-center'>© 2026 版权所有 All Rights Reserved</div>

  <div class='h-[40px]'></div>

</div>
</template>
<script setup name='HomeViewPC'>
import TheNavbar from '@/components/TheNavbar/Index.vue';
import TheSwiper from './_view/TheSwiper.vue';
import TheSubTitle from './_view/TheSubTitle.vue';
import ViewZhenRen from './_view/ViewZhenRen.vue';
// import ViewTiYu from './_view/ViewTiYu.vue';
// import ViewDianYou from './_view/ViewDianYou.vue';
import ViewZhongShenBang from './_view/ViewZhongShenBang.vue';
import ViewYingJiaMiJi from './_view/ViewYingJiaMiJi.vue';
// import ViewPinPaiZanZhu from './_view/ViewPinPaiZanZhu.vue';
import ViewBottom from './_view/ViewBottom.vue';

</script>
<style scoped>
.vp_model {
  width:100%; min-height:100vh;
}
</style>
