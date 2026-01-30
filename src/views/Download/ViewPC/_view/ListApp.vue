<template>
<div class='tn_model mb-[20px] relative'>

  <div class='g-model-width grid grid-cols-4 gap-x-[20px] gap-y-[20px]'>

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
                  item.ident === "d99ServiceCall" && "px-[6px]",
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
  ident:'dGame', icon:'down-99-game.png', name:'游戏下载',
    btnList: [
      // { ident:'x01', name:'手机APP', link:'https://www.3658829.com/#/HomeAPP', },
      { ident:'x01', name:'手机APP', link:'http://6.zd10086.com/', },
      // { ident:'x02', name:'PC', link:'https://www.3658829.com/#/HomePhone', },
      { ident:'x02', name:'PC', link:'http://8.zd10086.com/', },
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
    ident:'dChatJiuXing', icon:'down-jiuxing-chat.png', name:'九信聊天',
    btnList: [
      { ident:'x01', name:'下载', link:'http://www.123456799.net/', },
    ],
  },
  {
    ident:'dChatHaiOu', icon:'down-haiou-chat.png', name:'海鸥聊天',
    btnList: [
      { ident:'x01', name:'下载', link:'https://www.haiouchat.com/', },
    ],
  },
  {
    ident:'dWalletJinKuang', icon:'down-wallet-jinkuang.png', name:'金矿钱包',
    btnList: [
      { ident:'x01', name:'下载', link:'https://www.jkqb.cc/', },
    ],
  },
  {
    ident:'d99OnlineSErvice', icon:'down-99-online-service.png', name:'99在线客服',
    btnList: [
      { ident:'x01', name:'聊天', link:'https://k.9955599.com/chat/index?noCanClose=1&token=a1ec5dc674d238ae08689c6bba2a7af2', },
    ],
  },
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
