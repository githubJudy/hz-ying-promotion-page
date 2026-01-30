<template>
<div class='w-full mb-[20px]'>

  <div class='g-phone-width'>
    <template v-for='item in _list' :key='item.ident'>
      <div class='h-[160px] relative cursor-pointer mb-[10px]'>
        <!-- bg img -->
        <div class='w-full h-full absolute top-0 left-0 rounded-[10px] g-overflow'>
          <img class='w-full h-full absolute top-0 left-0' :src='require(`@/assets/imgs/zhenren/${item.bgImg}`)' />
          <div class='_blur-bg w-full h-full absolute top-0 left-0'></div>
        </div>

        <!-- people img -->
        <img class='w-[220px] h-[160px] absolute top-0 right-0' :src='require(`@/assets/imgs/zhenren/${item.peopleImg}`)' />

        <div class='w-full text-[14px] text-[#f7c33f] absolute bottom-0 left-0 border-box px-[30px] py-[20px]'>{{item.prompt}}</div>
      </div>
    </template>
  </div>

</div>
</template>
<script setup name='ViewZhenRen'>

const _list = [
  { ident:'ident01', bgImg:'zhenren-a-bg.avif', peopleImg:'zhenren-a-people.avif', prompt:'高达500万限红，豪客首选', },
  { ident:'ident02', bgImg:'zhenren-b-bg.jpg', peopleImg:'zhenren-b-people.avif', prompt:'全球第一真人娱乐', },
  { ident:'ident03', bgImg:'zhenren-c-bg.png', peopleImg:'zhenren-c-people.avif', prompt:'百变玩法 高端刺激', },
]

</script>
<style scoped>
._blur-bg {
  background:rgba(12, 14, 43, .4);
  backdrop-filter:blur(5px);
}
</style>
