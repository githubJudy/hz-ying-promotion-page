<template>
<div class='w-full mb-[20px]'>

  <div class='g-model-width grid grid-cols-3 gap-x-[20px]'>
    <template v-for='item in _list' :key='item.ident'>
      <div class='vzr_view h-[200px] relative cursor-pointer'>
        <!-- bg img -->
        <img class='w-full h-full absolute top-0 left-0' :src='require(`@/assets/imgs/zhenren/${item.bgImg}`)' />

        <!-- people img -->
        <img class='vzr_vi_people w-[280px] h-[200px] absolute top-0 right-0' :src='require(`@/assets/imgs/zhenren/${item.peopleImg}`)' />
      </div>
    </template>
  </div>

</div>
</template>
<script setup name='ViewZhenRen'>

const _list = [
  { ident:'ident01', bgImg:'zhenren-a-bg.avif', peopleImg:'zhenren-a-people.avif', },
  { ident:'ident02', bgImg:'zhenren-b-bg.avif', peopleImg:'zhenren-b-people.avif', },
  { ident:'ident03', bgImg:'zhenren-c-bg.avif', peopleImg:'zhenren-c-people.avif', },
]

</script>
<style scoped>
.vzr_view {
}
  .vzr_view:hover {
  }
    .vzr_view:hover .vzr_vi_people {
      animation:_ani-move .25s 1 forwards;
    }
    @keyframes _ani-move {
      from {
        width:280px; height:200px;
        top:0;
      }
      to {
        width:calc(280px + 16px); height:calc(200px + 16px);
        top:-16px;
      }
    }
</style>
