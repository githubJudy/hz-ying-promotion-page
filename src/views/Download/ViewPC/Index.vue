<template>
<div class='vp_model'>

  <div class='g-model-width !mb-[20px]'>

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

    <div class='w-full h-[2px] bg-[rgba(255,255,255,.2)]'></div>

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

  <div class='h-[40px]'></div>

</div>
</template>
<script setup name='DownloadViewPC'>
import { ref, onMounted } from 'vue';
import ListApp from './_view/ListApp.vue';
import ListTools from './_view/ListTools.vue';
import ListBrowser from './_view/ListBrowser.vue';
import router from '@/routers';

const _typeList = [
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
</style>
