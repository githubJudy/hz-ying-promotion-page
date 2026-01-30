<template>
<div class='tn_model mb-[20px] relative'>

  <div class='g-phone-width border-box pt-[10px]'>

    <div class='w-full flex mb-[10px]'>
      <!-- logo -->
      <div class='w-[128px] h-[46px]'>
        <img class='w-full h-full' src='@/assets/imgs/logo/logo.png' />
      </div>
    </div>

    <!-- swiper list -->
    <div class='w-full h-[134px] rounded-[14px] mb-[2px]'>
      <el-carousel class='w-full rounded-[10px] g-overflow' height='134px'>
        <el-carousel-item v-for='item in _swiperList' :key='item'>
          <div class='w-full h-full'>
            <img class='w-full h-full' :src='require(`@/assets/imgs/swiper/${item}`)' />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- menu list -->
    <div class='w-full flex overflow-x-scroll g-hidescroll'>
      <template v-for='(item,index) in _actionLeftList' :key='item.ident'>
        <div class='w-[78px] h-[46px] inline-flex justify-center items-center py-[2px] px-[2px] flex-shrink-0 relative'>
          <div
            :class='[
              "text-[16px] text-[#aab2bd]",
              index === _actionLeftIndex && "!text-[22px] !text-[white]",
            ]'
            :data-index='index' @click='_bindActionLeftIndex'
            >{{item.name}}
          </div>

          <template v-if='index === _actionLeftIndex'>
            <div class='g-bg-01 w-1/2 h-[3px] absolute bottom-[2px] left-1/4'></div>
          </template>
        </div>
      </template>
    </div>

  </div>

</div>
</template>
<script setup name='TheNavbar'>
import { ref, onMounted, } from 'vue';
import router from '@/routers';

const _swiperList = [
  'swiper-item-01.png',
  'swiper-item-02.png',
  'swiper-item-03.png',
];

const _actionLeftList = [
        { ident:'tuiJian', name:'推荐', },
        // { ident:'zhenRen', name:'真人', },
        { ident:'download', name:'下载', },
        /*{ ident:'tiYu', name:'体育', },
        { ident:'dianYou', name:'电游', },
        { ident:'buYu', name:'捕鱼', },
        { ident:'qiPai', name:'棋牌', },
        { ident:'caiPiao', name:'彩票', },*/
      ],
      _actionLeftIndex = ref(0)/*,
      _actionRightList = [
        { ident:'xx', icon:'navbar-menu-appDownload.svg', name:'APP下载', },
      ]*/
;

function _bindActionLeftIndex(event) {
  const { index } = event.currentTarget.dataset;
  if (_actionLeftIndex.value === index) return;

  if (_actionLeftList[index].ident === 'download') {
    if (router.currentRoute.value.name !== 'Download') {
      router.push('/Download');
    }

    return;
  }

  _actionLeftIndex.value = Number(index);
  if (router.currentRoute.value.name !== 'Home') {
    router.replace('/');
  }
}

onMounted(()=> {
  if (router.currentRoute.value.name === 'Download') {
    _actionLeftIndex.value = 1;
  } else {
    _actionLeftIndex.value = 0;
  }
})

</script>
<style scoped>
.tn_model {
  background:
    linear-gradient(
      rgba(30, 47, 102, 0.9),
      rgb(15, 29, 74)
    ),
    linear-gradient(
      164.53deg,
      rgb(32, 95, 255) -34.15%,
      rgba(4, 41, 70, 0) 48.33%
    )
  ;
  width:100%; /* height:80px; */
}
</style>
