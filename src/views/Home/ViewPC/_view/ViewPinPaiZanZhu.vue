<template>
<div class='w-full mb-[20px]'>

  <div class='vppzz_model g-model-width !mb-[40px] grid grid-cols-4 rounded-[10px]'>

    <template v-for='item in _list' :key='item.ident'>
      <div class='h-[78px] flex justify-center items-center'>
        <img class='h-[30px] mr-[10px]' :src='require(`@/assets/imgs/pinpaizanzhu/${item.icon}`)' />
        <div class='text-[18px] text-[#aab2bd]'>{{item.name}}</div>
      </div>
    </template>

  </div>

  <div class='g-model-width'>

    <img class='w-full h-[86px]' src='@/assets/imgs/pinpaizanzhu/pinpaizanzhu-05.avif' />

  </div>

</div>
</template>
<script setup name='ViewPinPaiZanZhu'>

const _list = [
  { ident:'x01', icon:'pinpaizanzhu-01.svg', name:'高尔夫亚巡赛', },
  { ident:'x02', icon:'pinpaizanzhu-02.avif', name:'勒沃库森', },
  { ident:'x03', icon:'pinpaizanzhu-03.svg', name:'索伯车队', },
  { ident:'x04', icon:'pinpaizanzhu-04.avif', name:'西甲', },
]

</script>
<style scoped>
.vppzz_model {
  background:linear-gradient(90deg, #172f43, #15213f);
}
</style>
