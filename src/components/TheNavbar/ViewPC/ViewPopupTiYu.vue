<template>
<div class='w-full'>

  <div class='w-full flex border-box py-[10px]'>
    <div class='w-[118px] h-[156px] mt-[10px] flex-shrink-0'>
      <img class='w-full h-full' src='@/assets/imgs/navbar-popup/navbar-popup-tiYu.avif' />
    </div>

    <div class='flex-1 inline-flex justify-around'>
      <template v-for='item in _list' :key='item.ident'>
        <div class='vpty_view w-1/3 h-[180px] flex cursor-pointer'>
          <!-- img -->
          <img class='vpty_vi_img w-[180px] h-[170px] mt-[10px] flex-shrink-0' :src='require(`@/assets/imgs/navbar-popup/${item.img}`)' />

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
<script setup name='ViewPopupTiYu'>

const _list = [
  { ident:'ident01', img:'navbar-popup-tiYu-people-a.avif', name:'BTI体育', prompt:'顶级赔率 迅速结算', },
  { ident:'ident02', img:'navbar-popup-tiYu-people-b.avif', name:'沙巴体育', prompt:'赛事全面 超高水位', },
  { ident:'ident03', img:'navbar-popup-tiYu-people-c.avif', name:'IM体育', prompt:'赛事直播 独有兑现', },
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
