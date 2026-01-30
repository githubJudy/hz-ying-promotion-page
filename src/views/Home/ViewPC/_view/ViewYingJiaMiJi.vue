<template>
<div class='vzsb_model w-full h-[320px]'>

  <div class='w-full h-[50px] text-[22px] text-[white] flex items-center box-border pl-[100px]'>合作共赢</div>

  <div class='vjjm_banner w-full h-[267px] grid grid-rows-2 grid-cols-1 gap-x-[20px] gap-y-[12px] box-border py-[14px] px-[20px]'>
    <div class='vjjm_ba_view w-full h-full rounded-[10px] g-overflow relative cursor-pointer' @click='_bindDaili'>
      <img class='vjjm_ba_vi_fill w-full h-full' src='@/assets/imgs/banners/yjmj-banner-bg.jpeg' />
      <div class='_blur-bg w-full h-full absolute top-0 left-0'></div>
      <div class='w-full h-full text-[30px] text-[#f7c33f] tracking-[4px] flex justify-center items-center absolute top-0 left-0'>99诚招代理</div>
    </div>

    <div class='vjjm_ba_view w-full h-full rounded-[10px] g-overflow relative cursor-pointer' @click='_bindDaili'>
      <img class='vjjm_ba_vi_fill w-full h-full' src='@/assets/imgs/banners/yjmj-banner-bg.jpeg' />
      <div class='_blur-bg w-full h-full absolute top-0 left-0'></div>
      <div class='w-full h-full text-[30px] text-[#f7c33f] tracking-[4px] flex justify-center items-center absolute top-0 left-0'>强大的资金后盾保障 信誉最佳!</div>
    </div>
  </div>

</div>
</template>
<script setup name='ViewYingJiaMiJi'>

function _bindDaili() {
  window.open('https://1.9958998.com/#/login', '_blank');
}

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

._blur-bg {
  /*background:rgba(12, 14, 43, .4);*/
  background:rgba(255, 255, 255, .15);
  backdrop-filter:blur(4px);
}
</style>
