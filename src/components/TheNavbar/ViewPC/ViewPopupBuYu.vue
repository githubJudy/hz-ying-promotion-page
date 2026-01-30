<template>
<div class='w-full'>

  <div class='w-full flex border-box py-[10px]'>

    <div class='w-[118px] h-[156px] mt-[10px] mr-[20px] flex-shrink-0'>
      <img class='w-full h-full' src='@/assets/imgs/navbar-popup/navbar-popup-buYu.avif' />
    </div>

    <div class='flex-1 inline-flex justify-around flex-shrink-0'>

      <template v-for='item in _list' :key='item.ident'>
        <div class='vpty_view w-[200px] h-[168px] inline-flex justify-end flex-col cursor-pointer relative'>
          <!-- img -->
          <img class='vpty_vi_img w-[180px] h-[148px] absolute top-0 left-10px' :src='require(`@/assets/imgs/navbar-popup/buYu/${item.img}`)' />

          <div class='text-[20px] text-[white] text-center mb-[6px]'>{{item.name}}</div>
          <div class='text-[14px] text-[#aab2bd] text-center'>{{item.prompt}}</div>
        </div>
      </template>

    </div>

  </div>

</div>
</template>
<script setup name='ViewPopupBuYu'>

const _list = [
  { ident:'ident01', img:'navbar-popup-buYu-01.avif', name:'PA捕鱼王', prompt:'多人通场 炮炮有奖', },
  { ident:'ident02', img:'navbar-popup-buYu-02.avif', name:'TP捕鱼', prompt:'捕法多样 鱼乐无限', },
  { ident:'ident03', img:'navbar-popup-buYu-03.avif', name:'JDB财神捕鱼', prompt:'海中霸王 一炮暴富', },
  { ident:'ident04', img:'navbar-popup-buYu-04.avif', name:'瓦力捕鱼', prompt:'最强火力 超多鱼种', },
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
