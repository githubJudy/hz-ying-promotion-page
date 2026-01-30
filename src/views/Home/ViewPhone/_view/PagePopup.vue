<template>
<div class='fixed top-[40vh] right-0'>

  <div class='pp_view w-[100px] h-[36px] flex justify-center items-center rounded-[6px] cursor-pointer' @click='_bindOnlineService'>
    <img class='pp_vi_icon w-[20px] h-[20px] mr-[6px]' src='@/assets/imgs/icons/page-popup-online-service.svg' />
    <div class='pp_vi_name text-[14px] text-[#EEEEEE]'>在线客服</div>
  </div>

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
</style>
