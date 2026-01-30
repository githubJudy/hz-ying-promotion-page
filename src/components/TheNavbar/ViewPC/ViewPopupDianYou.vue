<template>
<div class='w-full'>

  <div class='w-full flex border-box py-[10px]'>

    <div class='w-[118px] h-[156px] mt-[10px] mr-[20px] flex-shrink-0'>
      <img class='w-full h-full' src='@/assets/imgs/navbar-popup/navbar-popup-dianYou.avif' />
    </div>

    <div class='flex-1 inline-flex justify-around flex-shrink-0'>
      <div class='vpty_view w-[314px] h-[162px] mt-[10px] mr-[20px] flex-shrink-0 rounded-[10px] g-overflow'>
        <img class='vpty_vi_img w-full h-full' src='@/assets/imgs/navbar-popup/dianYou/navbar-popup-dianYou-01.avif' />
      </div>

      <div class='flex-1 mr-[20px] grid grid-cols-3 gap-x-[14px] gap-y-[12px] mt-[10px]'>
        <template v-for='item in _list' :key='item.ident'>
          <div class='vpty_view h-[74px] cursor-pointer rounded-[10px] g-overflow'>
            <!-- img -->
            <img class='vpty_vi_img w-full h-full' :src='require(`@/assets/imgs/navbar-popup/dianYou/${item.img}`)' />
          </div>
        </template>
      </div>

      <div class='vpty_view w-[314px] h-[162px] mt-[10px] flex-shrink-0 rounded-[10px] g-overflow'>
        <img class='vpty_vi_img w-full h-full' src='@/assets/imgs/navbar-popup/dianYou/navbar-popup-dianYou-08.avif' />
      </div>
    </div>

  </div>

</div>
</template>
<script setup name='ViewPopupDianYou'>

const _list = [
  // { ident:'ident01', img:'navbar-popup-dianYou-01.avif', },
  { ident:'ident02', img:'navbar-popup-dianYou-02.avif', },
  { ident:'ident03', img:'navbar-popup-dianYou-03.avif', },
  { ident:'ident04', img:'navbar-popup-dianYou-04.avif', },
  { ident:'ident05', img:'navbar-popup-dianYou-05.avif', },
  { ident:'ident06', img:'navbar-popup-dianYou-06.avif', },
  { ident:'ident07', img:'navbar-popup-dianYou-07.avif', },
  // { ident:'ident08', img:'navbar-popup-dianYou-08.avif', },
]

</script>
<style scoped>
.vpty_view {
}
  .vpty_view:hover .vpty_vi_img {
    transform:scale(1.15);
  }
  .vpty_vi_img {
    transition:all 0.25s;
  }
</style>
