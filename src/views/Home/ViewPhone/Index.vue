<template>
<div class='vp_model'>

  <TheNavbar type='PHONE' />

  <TheSubTitle name='真人赌场' />
  <ViewZhenRen />

  <!-- <TheSubTitle name='体育' />
  <ViewTiYu /> -->

  <!-- <TheSubTitle name='电游大厅' />
  <ViewSwiperDianYou /> -->

  <!-- <TheSubTitle name='热门电游' />
  <ViewDianYou /> -->

  <!-- <TheSubTitle name='品牌赞助' />
  <ViewPinPaiZanZhu /> -->

  <!-- <TheSubTitle name='下载榜' /> -->
  <ViewXiaZaiBang />
  <!-- <ViewZhenRen /> -->

  <ViewBottom />

  <div class='g-phone-width text-[12px] text-[#848484] text-center'>© 2026 版权所有 All Rights Reserved</div>

  <div class='h-[40px]'></div>

  <PagePopup />

</div>
</template>
<script setup name='HomeViewPhone'>
import TheNavbar from '@/components/TheNavbar/Index.vue';
import TheSubTitle from './_view/TheSubTitle.vue';
import ViewZhenRen from './_view/ViewZhenRen.vue';
import ViewXiaZaiBang from './_view/ViewXiaZaiBang.vue';
// import ViewTiYu from './_view/ViewTiYu.vue';
// import ViewDianYou from './_view/ViewDianYou.vue';
// import ViewPinPaiZanZhu from './_view/ViewPinPaiZanZhu.vue';
import ViewBottom from './_view/ViewBottom.vue';
import PagePopup from './_view/PagePopup.vue';

</script>
<style scoped>
.vp_model {
  width:100%; min-height:100vh;
}
</style>
