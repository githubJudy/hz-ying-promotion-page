<template>
<div class='tn_model mb-[20px] relative'>

  <div class='g-phone-width grid grid-cols-2 gap-x-[10px] gap-y-[10px]'>

    <template v-for='item in _list' :key='item.ident'>
      <div
        :class='[
          "bg-[#151a36] flex box-border py-[12px] px-[12px] rounded-[6px]",
          item.ident === "dGame" && "col-start-1 col-end-3",
        ]'
      >
        <div class='w-[40px] h-[40px] rounded-[6px] g-overflow flex-shrink-0 mr-[10px]'>
          <img class='w-full h-full' :src='require(`@/assets/imgs/download/${item.icon}`)' />
        </div>
        <div class='flex-1 box-border pt-[2px]'>
          <div class='w-full text-[16px] text-[#aab2bd] mb-[10px]'>{{item.name}}</div>

          <div class='flex flex-wrap'>
            <template v-for='obj in item.btnList' :key='obj.ident'>
              <div
                :class='[
                  "g-bg-01 w-[fit-content] text-[14px] text-[white] py-[4px] px-[12px] rounded-[4px] cursor-pointer mr-[10px] mb-[2px]",
                  item.ident === "d99ServiceCall" && "text-[12px] px-[2px]",
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
<script setup name='ListApp'>

const _list = [
  {
    ident:'dChatJiuXing', icon:'down-jiuxing-chat.png', name:'九信聊天',
    btnList: [
      { ident:'x01', name:'下载', link:'http://www.123456799.net/', },
    ],
  },
  // {
  //   ident:'dChatHaiOu', icon:'down-haiou-chat.png', name:'海鸥聊天',
  //   btnList: [
  //     { ident:'x01', name:'下载', link:'https://www.haiouchat.com/', },
  //   ],
  // },
  {
    ident:'dGame', icon:'down-99-game.png', name:'游戏下载',
    btnList: [
      // { ident:'x01', name:'手机APP', link:'https://www.3658829.com/#/HomeAPP', },
      { ident:'x01', name:'手机APP', link:'http://www.9958998.com/#/MobileDown', },
      // { ident:'x02', name:'PC', link:'https://www.3658829.com/#/HomePhone', },
      // { ident:'x02', name:'PC', link:'https://www.3658829.com/download/w2/99Egret_zh.exe', },
        { ident:'x02', name:'PC', link:'https://www.3658829.net/download/w2/99Egret_zh.exe', },
      { ident:'x03', name:'代理', link:'https://1.9958998.com/#/login', },
    ],
  },
  {
    ident:'dTg', icon:'down-telegram.png', name:'telegram',
    btnList: [
      { ident:'x01', name:'下载', link:'https://desktop.telegram.org/', },
    ],
  },
  {
    ident:'dChatBat', icon:'down-bat-chat.svg', name:'蝙蝠聊天',
    btnList: [
      { ident:'x01', name:'下载', link:'https://www.batchat.com/', },
    ],
  },
  {
    ident:'dWalletJinKuang', icon:'down-wallet-jinkuang.png', name:'金矿钱包',
    btnList: [
      { ident:'x01', name:'下载', link:'https://www.jkqb.cc/', },
    ],
  },
  {
    ident:'dBiAn', icon:'down-bian-icon.webp', name:'币安',
    btnList: [
      { ident:'x01', name:'下载', link:'https://download-1306379396.file.myqcloud.com/pack/BNApp.apk', },
    ],
  },
  {
    ident:'dOuYi', icon:'down-ouyi-icon.webp', name:'欧易',
    btnList: [
      { ident:'x01', name:'下载', link:'https://www.okx.com/zh-hans/download?pageSource=nav', },
    ],
  },
  // {
  //   ident:'d99OnlineSErvice', icon:'down-99-online-service.png', name:'99在线客服',
  //   btnList: [
  //     { ident:'x01', name:'聊天', link:'https://k.9955599.com/chat/index?noCanClose=1&token=a1ec5dc674d238ae08689c6bba2a7af2', },
  //   ],
  // },
  {
    ident:'d99ServiceCall', icon:'down-99-service-call.png', name:'客服联系电话',
    btnList: [
      { ident:'x01', name:'+95 9885965678', link:'', },
    ],
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
