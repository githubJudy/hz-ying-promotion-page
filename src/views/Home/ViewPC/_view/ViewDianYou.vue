<template>
<div class='w-full mb-[20px]'>

  <div class='g-model-width grid grid-cols-8 gap-x-[20px] gap-y-[20px]'>
    <template v-for='item in _list' :key='item.ident'>
      <div class='vdy_view rounded-[10px] g-overflow'>
        <img class='vdy_vi_fill w-full h-full' :src='require(`@/assets/imgs/hot-dianyou/${item.iconImg}`)' />
      </div>
    </template>
  </div>

</div>
</template>
<script setup name='ViewDianYou'>

const _list = [
  { ident:'ident01', iconImg:'hot-dianyou-01.webp', },
  { ident:'ident02', iconImg:'hot-dianyou-02.webp', },
  { ident:'ident03', iconImg:'hot-dianyou-03.webp', },
  { ident:'ident04', iconImg:'hot-dianyou-04.webp', },
  { ident:'ident05', iconImg:'hot-dianyou-05.webp', },
  { ident:'ident06', iconImg:'hot-dianyou-06.webp', },
  { ident:'ident07', iconImg:'hot-dianyou-07.avif', },
  { ident:'ident08', iconImg:'hot-dianyou-08.webp', },
  { ident:'ident09', iconImg:'hot-dianyou-09.webp', },
  { ident:'ident10', iconImg:'hot-dianyou-10.webp', },
  { ident:'ident11', iconImg:'hot-dianyou-11.webp', },
  { ident:'ident12', iconImg:'hot-dianyou-12.webp', },
  { ident:'ident13', iconImg:'hot-dianyou-13.webp', },
  { ident:'ident14', iconImg:'hot-dianyou-14.avif', },
  { ident:'ident15', iconImg:'hot-dianyou-15.avif', },
  { ident:'ident16', iconImg:'hot-dianyou-16.avif', },
  { ident:'ident17', iconImg:'hot-dianyou-17.webp', },
  { ident:'ident18', iconImg:'hot-dianyou-18.avif', },
  { ident:'ident19', iconImg:'hot-dianyou-19.webp', },
  { ident:'ident20', iconImg:'hot-dianyou-20.webp', },
  { ident:'ident21', iconImg:'hot-dianyou-21.webp', },
  { ident:'ident22', iconImg:'hot-dianyou-22.avif', },
  { ident:'ident23', iconImg:'hot-dianyou-23.webp', },
  { ident:'ident24', iconImg:'hot-dianyou-24.webp', },
  { ident:'ident25', iconImg:'hot-dianyou-25.webp', },
  { ident:'ident26', iconImg:'hot-dianyou-26.webp', },
  { ident:'ident27', iconImg:'hot-dianyou-27.webp', },
  { ident:'ident28', iconImg:'hot-dianyou-28.webp', },
  { ident:'ident29', iconImg:'hot-dianyou-29.webp', },
  { ident:'ident30', iconImg:'hot-dianyou-30.webp', },
  { ident:'ident31', iconImg:'hot-dianyou-31.webp', },
  { ident:'ident32', iconImg:'hot-dianyou-32.webp', },
]

</script>
<style scoped>
.vdy_view {
}
  .vdy_view:hover .vdy_vi_fill {
    transform:scale(1.15);
  }
  .vdy_vi_fill {
    transition:all 0.25s;
  }
</style>
