<template>
<div class='vzsb_model w-full h-[320px]'>

  <div class='w-full h-[50px] text-[22px] text-[white] flex items-center box-border pl-[100px]'>赢家秘籍</div>

  <div class='vjjm_banner w-full h-[267px] grid grid-rows-2 grid-cols-1 gap-x-[20px] gap-y-[12px] box-border py-[14px] px-[20px]'>
    <div class='vjjm_ba_view w-full h-full rounded-[10px] g-overflow'>
      <img class='vjjm_ba_vi_fill w-full h-full' src='@/assets/imgs/banners/yjmj-banner-01.avif' />
    </div>

    <div class='vjjm_ba_view w-full h-full rounded-[10px] g-overflow'>
      <img class='vjjm_ba_vi_fill w-full h-full' src='@/assets/imgs/banners/yjmj-banner-02.avif' />
    </div>
  </div>

</div>
</template>
<script setup name='ViewYingJiaMiJi'>

</script>
<style scoped>
.vzsb_model {
  background-image:url('@/assets/imgs/bgs/yjmj-bg.avif'); background-repeat:no-repeat; background-size:100% 100%;
}
.vjjm_banner {
}
  .vjjm_ba_view {
    transition:all 0.15s;
  }
    .vjjm_ba_view:hover {
      transform:scaleX(1.05) scaleY(1.1);
    }
    .vjjm_ba_vi_fill {
      transform:scaleY(1.8);
    }
</style>
