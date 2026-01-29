<template>
<div class='w-full'>

  <div class='w-full flex border-box py-[10px]'>

    <div class='w-full text-[30px] mt-[60px] text-center text-[white]'>敬请期待</div>

    <template v-if='false'>
      <div class='w-[118px] h-[156px] mt-[10px] flex-shrink-0'>
        <img class='w-full h-full' src='@/assets/imgs/navbar-popup/navbar-popup-caiPiao.avif' />
      </div>

      <div class='flex-1 inline-flex justify-around'>
        <template v-for='item in _list' :key='item.ident'>
          <div class='vpzr_view w-1/3 h-[180px] flex cursor-pointer'>
            <!-- img -->
            <img class='vpzr_vi_img w-[190px] h-[180px] flex-shrink-0' :src='require(`@/assets/imgs/navbar-popup/caiPiao/${item.img}`)' />

            <!-- textarea -->
            <div class='flex-1 border-box pt-[40px]'>
              <div class='text-[20px] text-[white] text-center mb-[10px]'>{{item.name}}</div>
              <div class='text-[14px] text-[#aab2bd] text-center'>{{item.prompt}}</div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>

</div>
</template>
<script setup name='ViewCaiPiao'>

const _list = [
  { ident:'ident01', img:'navbar-popup-caiPiao-01.avif', name:'BBIN彩票', prompt:'最具公正投注趋势 各种游戏应有尽有全新体验', },
  { ident:'ident02', img:'navbar-popup-caiPiao-02.avif', name:'快乐彩', prompt:'分分彩重庆时时彩 北京KENO新运飞艇', },
  { ident:'ident03', img:'navbar-popup-caiPiao-03.avif', name:'YP刮刮乐', prompt:'轻松一刮 大奖即中', },
]

</script>
<style scoped>
.vpzr_view {
}
  .vpzr_view:hover .vpzr_vi_img {
    transform:scale(1.15);
  }
  .vpzr_vi_img {
    transition:all 0.25s;
  }
</style>
