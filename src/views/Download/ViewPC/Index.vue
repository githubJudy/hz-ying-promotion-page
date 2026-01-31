<template>
<div class='vp_model'>

  <div class='g-model-width flex'>

    <div class='w-[200px] h-[80vh] bg-[#151b37] flex-shrink-0 mr-[20px] rounded-[6px]'>
      <template v-for='item in _menuList' :key='item.ident'>
        <div class='w-full flex justify-center box-border px-[10px] py-[20px] cursor-pointer'>
          <div class='w-[20px] h-[20px] mr-[10px]'>
            <img class='w-full h-full' :src='require(`@/assets/imgs/download/menu/${item.icon}`)' />
          </div>
          <div class='text-[#2c67ff]'>{{item.name}}</div>
        </div>
      </template>
    </div>

    <div class='flex-1'>
      <div class='w-full flex'>
        <template v-for='(item,index) in _typeList' :key='item.ident'>
          <div
            class='w-[160px] h-[46px] inline-flex justify-center items-center py-[2px] px-[2px] flex-shrink-0 cursor-pointer relative'
            :data-index='index' @click='_bindType'
          >
            <div
              :class='[
                "text-[16px] text-[#aab2bd]",
                index === _typeIndex && "!text-[18px] !text-[white]",
              ]'
              >{{item.name}}
            </div>

            <template v-if='index === _typeIndex'>
              <div class='g-bg-01 w-1/2 h-[3px] absolute bottom-[0] left-1/4'></div>
            </template>
          </div>
        </template>
      </div>

      <div class='w-full h-[2px] mb-[20px] bg-[rgba(255,255,255,.2)]'></div>

      <div class='w-full h-[214px] mb-[20px] rounded-[6px] g-overflow relative'>
        <img class='w-full h-full' src='@/assets/imgs/banners/yjmj-banner-bg.jpeg' />
        <div class='_blur-bg w-full h-full absolute top-0 left-0'></div>

        <div class='absolute top-[14px] right-[60px]'>
          <img class='w-[140px] h-[140px] mx-auto mb-[6px]' src='@/assets/imgs/download/99-game-qrcode.png' />
          <div class='text-[18px] text-[white] text-center mb-[6px]'>扫一扫二维码立刻下载</div>
          <div class='text-[18px] text-[white] text-center'>支持IOS&Android</div>
        </div>

        <div class='absolute top-[14px] right-[300px]'>
          <img class='w-[140px] h-[140px] mx-auto mb-[6px]' src='@/assets/imgs/download/99-add-service03-qrcode.png' />
          <div class='text-[18px] text-[white] text-center mb-[6px]'>Telegram 扫码加好友</div>
          <div class='text-[18px] text-[white] text-center'>ID : @jiujiuguibinhui</div>
        </div>

        <div class='absolute top-[14px] right-[560px]'>
          <img class='w-[140px] h-[140px] mx-auto mb-[6px]' src='@/assets/imgs/download/99-add-service01-qrcode.png' />
          <div class='text-[18px] text-[white] text-center mb-[6px]'>九信扫码加好友</div>
          <div class='text-[18px] text-[white] text-center'>客服1</div>
        </div>

        <div class='absolute top-[14px] right-[800px]'>
          <img class='w-[140px] h-[140px] mx-auto mb-[6px]' src='@/assets/imgs/download/99-add-service02-qrcode.png' />
          <div class='text-[18px] text-[white] text-center mb-[6px]'>九信扫码加好友</div>
          <div class='text-[18px] text-[white] text-center'>客服2</div>
        </div>
      </div>

      <div class='g-model-width'>
        <template v-if='_typeIndex === 0'>
          <ListApp />
        </template>
        <template v-else-if='_typeIndex === 1'>
          <ListTools />
        </template>
        <template v-else-if='_typeIndex === 2'>
          <ListBrowser />
        </template>
      </div>

    </div>

  </div>

  <div class='h-[40px]'></div>

</div>
</template>
<script setup name='DownloadViewPC'>
import { ref, onMounted } from 'vue';
import ListApp from './_view/ListApp.vue';
import ListTools from './_view/ListTools.vue';
import ListBrowser from './_view/ListBrowser.vue';
import router from '@/routers';

const _menuList = [
        { ident:'downCenter', icon:'down-menu-down-center.svg', name:'下载中心', },
      ],
      _typeList = [
        { ident:'downApps', name:'常用APP下载', },
        { ident:'downTools', name:'工具下载', },
        { ident:'downBrowsers', name:'浏览器下载', },
      ],
      _typeIndex = ref(0)
;

function _bindType(event) {
  const { index } = event.currentTarget.dataset;
  if (_typeIndex.value === index) return;

  _typeIndex.value = Number(index);
}

onMounted(()=> {
  const { type='' } = router.currentRoute.value.query;
  if (type) {
    _typeIndex.value = (
      type === 'app' ? 0 :
      type === 'tools' ? 1 :
      type === 'browser' ? 2 :
      0
    )
  }
})

</script>
<style scoped>
._blur-bg {
  background:rgba(12, 14, 43, .4);
  /*background:rgba(255, 255, 255, .1);*/
  backdrop-filter:blur(6px);
}
</style>
