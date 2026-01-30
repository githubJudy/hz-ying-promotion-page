<template>
<div class='w-full h-[180px] mb-[30px]'>

  <div class='vzsb_model g-phone-width h-full'>
    <div class='w-full h-[26px] text-[16px] text-[white] flex items-center box-border pl-[60px]'>下载榜</div>

    <div class='h-[50px]'></div>

    <div class='w-full flex justify-center box-border px-[16px]'>
      <div class='h-[22px] mt-[10px] flex-1 box-border'>
        <div class='text-[12px] text-[#aab2bd] text-center mb-[4px]'><!-- x***01 --></div>
        <div class='text-[12px] text-[#f7c33f] text-center cursor-pointer' @click='_bindDownload("tools")'><!-- ¥ 11,345 -->常用工具下载</div>
      </div>

      <div class='w-[124px] h-[32px] box-border pt-[6px]'>
        <div class='text-[12px] text-[#aab2bd] text-center mb-[4px]'><!-- x***01 --></div>
        <div class='text-[12px] text-[#f7c33f] text-center cursor-pointer' @click='_bindDownload("app")'><!-- ¥ 11,345 -->常用app下载</div>
      </div>

      <div class='h-[22px] mt-[10px] flex-1 box-border'>
        <div class='text-[12px] text-[#aab2bd] text-center mb-[4px]'><!-- x***01 --></div>
        <div class='text-[12px] text-[#f7c33f] text-center cursor-pointer' @click='_bindDownload("browser")'><!-- ¥ 11,345 -->常用浏览器下载</div>
      </div>
    </div>

    <div class='w-full text-[20px] text-[#f7c33f] text-center py-[20px] cursor-pointer' @click='_bindDownload("fast")'>快速下载专区</div>

    <!-- <div class='vzsb_table w-full'>
      <div class='vzsb_ta_head w-[calc(100%_-_56px)] mx-auto bg-[#19315f] flex justify-center text-[#aab2bd] box-border px-[28px] py-[4px]'>
        <div class='_view_first text-center'>排名</div>
        <div class='_view_second text-center'>用户名</div>
        <div class='_view_third text-center'>盈利金额(元)</div>
      </div>

      <div class='vzsb_ta_list h-[86px] overflow-y-scroll'>
        <template v-for='(item,index) in _list' :key='item.ident'>
          <div class='vzsb_ta_li_line w-[calc(100%_-_56px)] mx-auto flex justify-center text-[#aab2bd] box-border px-[28px] py-[2px]'>
            <div class='_view_first text-center'>{{index + 1}}</div>
            <div class='_view_second text-center'>{{item.name}}</div>
            <div class='_view_third text-center'>¥ {{item.amount}}</div>
          </div>
        </template>

        <div class='w-full flex justify-center text-[#aab2bd] box-border px-[28px] py-[4px]'>注：今日排行榜每15分钟自动更新一次</div>
      </div>
    </div> -->
  </div>

</div>
</template>
<script setup name='ViewXiaZaiBang'>
import router from '@/routers';

/*const _list = [
  { ident:'x01', name:'x***01', amount:'11,345' },
  { ident:'x02', name:'x***02', amount:'12,345' },
  { ident:'x03', name:'x***03', amount:'13,345' },
  { ident:'x04', name:'x***04', amount:'14,345' },
  { ident:'x05', name:'x***05', amount:'15,345' },
  { ident:'x06', name:'x***06', amount:'16,345' },
  { ident:'x07', name:'x***07', amount:'17,345' },
  { ident:'x08', name:'x***08', amount:'18,345' },
  { ident:'x09', name:'x***09', amount:'19,345' },
  { ident:'x10', name:'x***10', amount:'10,345' },
]*/

function _bindDownload(type) {
  router.push(`/Download?type=${type}`);
}

</script>
<style scoped>
.vzsb_model {
  background-image:url('@/assets/imgs/bgs/zsb-bg.avif'); background-repeat:no-repeat; background-size:100% 100%;
}
.vzsb_table {
  width:100%;
}
  .vzsb_table ._view_first {
    flex:1;
  }
  .vzsb_table ._view_second {
    width:208px;
    flex-shrink:0;
  }
  .vzsb_table ._view_third {
    flex:1;
  }
  .vzsb_ta_head {
  }
  .vzsb_ta_list {
  }
    .vzsb_ta_li_line {
      background:#181a20;
    }
      .vzsb_ta_li_line:nth-child(2n+1) {
        background:#2a2c33;
      }
</style>
