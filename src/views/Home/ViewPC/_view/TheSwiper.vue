<template>
<div class='w-full mb-[20px]'>

  <div class='g-model-width flex'>

    <div class='bg-[gray] w-[660px] h-[280px] mr-[20px] flex-shrink-0 rounded-[14px]'></div>

    <div class='ts_banner inline-flex flex-1'>
      <div class='h-[280px] flex-1 mr-[20px]'>
        <div class='ts_ba_view h-[calc(50%_-_10px)] rounded-[14px] mb-[20px]'>
          <img class='w-full h-full' src='@/assets/imgs/swiper/swiper-banner-01.webp' />
        </div>

        <div class='ts_ba_view h-[calc(50%_-_10px)] rounded-[14px]'>
          <img class='w-full h-full' src='@/assets/imgs/swiper/swiper-banner-02.webp' />
        </div>
      </div>

      <div class='ts_ba_view h-[280px] flex-1 rounded-[14px]'>
        <img class='w-full h-full' src='@/assets/imgs/swiper/swiper-banner-03.webp' />
      </div>
    </div>

  </div>

</div>
</template>
<script setup name='TheSwiper'>

</script>
<style scoped>
.ts_banner {
}
  .ts_ba_view {
    transition:all 0.15s;
  }
    .ts_ba_view:hover {
      transform:scale(1.05);
    }
</style>
