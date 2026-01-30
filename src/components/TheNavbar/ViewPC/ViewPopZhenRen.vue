<template>
<div class='w-full'>

  <div class='w-full flex border-box py-[10px]'>
    <div class='w-[118px] h-[156px] mt-[10px] flex-shrink-0'>
      <img class='w-full h-full' src='@/assets/imgs/navbar-popup/navbar-popup-zhenRen.avif' />
    </div>

    <div class='flex-1 inline-flex justify-around'>
      <template v-for='item in _list' :key='item.ident'>
        <div class='vpzr_view w-1/3 h-[180px] flex cursor-pointer'>
          <!-- img -->
          <img class='vpzr_vi_img w-[190px] h-[180px] flex-shrink-0' :src='require(`@/assets/imgs/navbar-popup/${item.img}`)' />

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
<script setup name='ViewPopZhenRen'>

const _list = [
  // { ident:'ident01', img:'navbar-popup-zhenRen-people-a.avif', name:'PA旗舰厅', prompt:'高达500万限红，豪客首选', },
  // { ident:'ident02', img:'navbar-popup-zhenRen-people-b.avif', name:'PA厅', prompt:'全球第一真人娱乐', },
  // { ident:'ident03', img:'navbar-popup-zhenRen-people-c.avif', name:'EVO厅', prompt:'百变玩法 高端刺激', },
  { ident:'ident01', img:'navbar-popup-zhenRen-people-a.avif', name:'高达500万限红，豪客首选', prompt:'', },
  { ident:'ident02', img:'navbar-popup-zhenRen-people-b.avif', name:'全球第一真人娱乐', prompt:'', },
  { ident:'ident03', img:'navbar-popup-zhenRen-people-c.avif', name:'百变玩法 高端刺激', prompt:'', },
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
