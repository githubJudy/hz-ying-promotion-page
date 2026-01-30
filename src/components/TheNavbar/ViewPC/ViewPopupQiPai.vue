<template>
<div class='w-full'>

  <div class='w-full flex border-box py-[10px]'>
    <div class='w-[118px] h-[156px] mt-[10px] flex-shrink-0'>
      <img class='w-full h-full' src='@/assets/imgs/navbar-popup/navbar-popup-qiPai.avif' />
    </div>

    <div class='flex-1 inline-flex justify-around'>
      <template v-for='item in _list' :key='item.ident'>
        <div class='vpzr_view w-1/3 h-[180px] flex cursor-pointer'>
          <!-- img -->
          <img class='vpzr_vi_img w-[190px] h-[180px] flex-shrink-0' :src='require(`@/assets/imgs/navbar-popup/qiPai/${item.img}`)' />

          <!-- textarea -->
          <div class='flex-1 border-box pt-[40px]'>
            <div class='text-[20px] text-[white] text-center mb-[10px]'>{{item.name}}</div>
            <div class='text-[14px] text-[#aab2bd] text-center'>{{item.prompt}}</div>
          </div>
        </div>
      </template>
    </div>
  </div>

</div>
</template>
<script setup name='ViewPopupQiPai'>

const _list = [
  { ident:'ident01', img:'navbar-popup-qiPai-01.avif', name:'开元棋牌', prompt:'万人在线 玩家对垒 火爆PK', },
  { ident:'ident02', img:'navbar-popup-qiPai-02.avif', name:'德州扑克', prompt:'真人德州扑克对战平台', },
  { ident:'ident03', img:'navbar-popup-qiPai-03.avif', name:'瓦力棋牌', prompt:'超全棋牌 万人竞技', },
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
