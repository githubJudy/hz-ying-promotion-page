<template>
<div class='w-full mb-[20px]'>

  <div class='g-model-width flex'>

    <div class='ts_swiper w-[660px] h-[280px] mr-[20px] flex-shrink-0 rounded-[14px]'>
      <el-carousel class='w-full rounded-[10px] g-overflow' height='280px'>
        <el-carousel-item v-for='item in _swiperList' :key='item'>
          <div class='ts_sw_view w-full h-full'>
            <img class='ts_sw_vi_fill w-full h-full' :src='require(`@/assets/imgs/swiper/${item}`)' />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class='ts_banner inline-flex flex-1'>
      <div class='h-[280px] flex-1 mr-[20px]'>
        <div class='ts_ba_view h-[calc(50%_-_10px)] rounded-[10px] g-overflow mb-[20px]'>
          <img class='w-full h-full' src='@/assets/imgs/swiper/swiper-banner-01.png' />
        </div>

        <div class='ts_ba_view h-[calc(50%_-_10px)] rounded-[14px]'>
          <img class='w-full h-full' src='@/assets/imgs/swiper/swiper-banner-02.png' />
        </div>
      </div>

      <div class='ts_ba_view bg-[white] h-[280px] flex-1 rounded-[14px]'>
        <img class='h-full mx-auto' src='@/assets/imgs/swiper/swiper-banner-03.png' />
      </div>
    </div>

  </div>

</div>
</template>
<script setup name='TheSwiper'>

const _swiperList = [
  'swiper-item-01.png',
  'swiper-item-02.png',
  'swiper-item-03.png',
];

</script>
<style scoped>
.ts_swiper {
}
  .ts_sw_view {
  }
    .ts_sw_view:hover .ts_sw_vi_fill {
      transform:scale(1.2);
    }
    .ts_sw_vi_fill {
      transition:all 0.15s;
    }
.ts_banner {
}
  .ts_ba_view {
    transition:all 0.15s;
  }
    .ts_ba_view:hover {
      transform:scale(1.05);
    }
</style>
