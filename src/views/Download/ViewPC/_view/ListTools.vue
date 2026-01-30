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
                  "g-bg-01 w-[fit-content] text-[white] py-[4px] px-[12px] rounded-[4px] cursor-pointer mr-[10px]",
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
<script setup name='ListTools'>

const _list = [
  {
    ident:'dSunLogin', icon:'down-sunlogin.png', name:'向日葵远程桌面',
    btnList: [
      { ident:'x01', name:'下载', link:'https://sunlogin.oray.com/', },
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
