<template>
<div class='tn_model mb-[20px] relative'>

  <div class='g-model-width grid grid-cols-3 gap-x-[20px] gap-y-[20px]'>

    <template v-for='item in _list' :key='item.ident'>
      <div class='bg-[#151a36] flex box-border py-[20px] px-[20px] rounded-[6px]'>
        <div class='w-[80px] h-[80px] rounded-[6px] g-overflow flex-shrink-0 mr-[20px]'>
          <img class='w-full h-full' :src='require(`@/assets/imgs/download/${item.icon}`)' />
        </div>
        <div class='flex-1 box-border pt-[4px]'>
          <div class='w-full text-[20px] text-[#aab2bd] mb-[20px]'>{{item.name}}</div>

          <div class='flex flex-wrap'>
            <template v-for='obj in item.btnList' :key='obj.ident'>
              <div
                :class='[
                  "g-bg-01 w-[fit-content] text-[white] py-[4px] px-[12px] rounded-[4px] cursor-pointer mr-[10px] mb-[6px]",
                  item.ident === "d99ServiceCall" && "px-[10px]",
                ]'
                :data-link='obj.link' @click='_bindLink'
                >{{obj.name}}
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>

  </div>

</div>
</template>
<script setup name='ListBrowser'>

const _list = [
  {
    ident:'dChrome', icon:'down-browser-chrome.avif', name:'Google Chrome',
    btnList: [
      { ident:'x01', name:'下载', link:'http://www.google.com/intl/zh-cn/chrome/browser/desktop/index.html', },
    ]
  },
  {
    ident:'dUniverse', icon:'down-browser-universe.avif', name:'Universe Browser',
    btnList: [
      { ident:'x01', name:'下载', link:'http://ub66.com/', },
    ]
  },
  {
    ident:'dFireFox', icon:'down-browser-firefox.avif', name:'Fire Fox',
    btnList: [
      { ident:'x01', name:'下载', link:'https://www.mozilla.org/zh-CN/firefox/all/#product-desktop-release', },
    ]
  },
  {
    ident:'dSouGou', icon:'down-browser-sougou.svg', name:'搜狗',
    btnList: [
      { ident:'x01', name:'下载', link:'https://ie.sogou.com/', },
    ]
  },
  {
    ident:'dQQ', icon:'down-browser-qq.svg', name:'QQ浏览器',
    btnList: [
      { ident:'x01', name:'下载', link:'https://browser.qq.com/', },
    ]
  },
]

function _bindLink(event) {
  const { link } = event.currentTarget.dataset;
  if (!link) return;

  window.open(link, '_blank');
}

</script>
<style scoped>
</style>
