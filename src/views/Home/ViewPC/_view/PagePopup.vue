<template>
<div class='fixed top-[40vh] right-0'>

  <div class='pp_view w-[140px] h-[46px] flex justify-center items-center rounded-[6px] cursor-pointer mb-[10px]' @click='_bindOnlineService'>
    <img class='pp_vi_icon w-[26px] h-[26px] mr-[6px]' src='@/assets/imgs/icons/page-popup-online-service.svg' />
    <div class='pp_vi_name text-[18px] text-[#EEEEEE]'>在线客服</div>
  </div>

  <el-popover popper-class='!py-[0] !px-[0] !border-[0]' placement='left' width='200px' :show-arrow='false' :offset='0'>
    <template #default>
      <div class='pp_popup w-full py-[20px]'>
        <div class='mb-[20px]'>
          <img class='w-[120px] h-[120px] mx-auto mb-[6px]' src='@/assets/imgs/download/99-add-service01-qrcode.png' />
          <div class='text-[14px] text-[white] text-center mb-[6px]'>九信扫码加好友</div>
          <div class='text-[14px] text-[white] text-center'>客服1</div>
        </div>

        <div class='mb-[20px]'>
          <img class='w-[120px] h-[120px] mx-auto mb-[6px]' src='@/assets/imgs/download/99-add-service02-qrcode.png' />
          <div class='text-[14px] text-[white] text-center mb-[6px]'>九信扫码加好友</div>
          <div class='text-[14px] text-[white] text-center'>客服2</div>
        </div>

        <div class=''>
          <img class='w-[120px] h-[120px] mx-auto mb-[6px]' src='@/assets/imgs/download/99-add-service03-qrcode.png' />
          <div class='text-[14px] text-[white] text-center mb-[6px]'>Telegram 扫码加好友</div>
          <div class='text-[14px] text-[white] text-center'>ID : @jiujiuguibinhui</div>
        </div>
      </div>
    </template>
    <template #reference>
      <div class='pp_view w-[140px] h-[46px] flex justify-center items-center rounded-[6px] cursor-pointer'>
        <img class='pp_vi_icon w-[26px] h-[26px] mr-[6px]' src='@/assets/imgs/icons/page-popup-scan-add-friend.svg' />
        <div class='pp_vi_name text-[18px] text-[#EEEEEE]'>添加好友</div>
      </div>
    </template>
  </el-popover>

</div>
</template>
<script setup name='PagePopup'>

function _bindOnlineService() {
  window.open(`https://k.9955599.com/chat/index?noCanClose=1&token=a1ec5dc674d238ae08689c6bba2a7af2`, '_blank');
}

</script>
<style scoped>
.pp_view {
  /*background:linear-gradient(180deg, rgba(30, 45, 83, 0.9) 1.18%, rgba(18, 33, 68, 0.9) 11.48%, rgba(14, 25, 52, 0.9) 58%, rgba(24, 50, 115, 0.9) 107.5%);*/
  /*background:linear-gradient(
      rgba(30, 47, 102, 0.9),
      rgb(15, 29, 74)
    ),
    linear-gradient(
      164.53deg,
      rgb(32, 95, 255) -34.15%,
      rgba(4, 41, 70, 0) 48.33%
    )
  ;*/
  background:rgba(80, 119, 237, .8);
}
  .pp_view:hover .pp_vi_icon {
    transform:scale(1.15);
  }
  .pp_view:hover .pp_vi_name {
    transform:scale(1.15);
  }
  .pp_vi_icon {
    transition:all 0.25s;
  }
  .pp_vi_name {
    transition:all 0.25s;
  }

.pp_popup {
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
}
</style>
