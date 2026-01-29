<template>
<div class='tn_model mb-[20px]'>

  <div class='g-model-width'>

    <div class='w-full flex'>
      <!-- logo -->
      <div class='w-[128px] h-[46px] bg-[gray]'>
        <img class='w-full h-full' />
      </div>
    </div>

    <div class='w-full flex'>
      <!-- action left list -->
      <div class='inline-flex flex-1'>
        <template v-for='item in _actionLeftList' :key='item.ident'>
          <div class='inline-flex items-center pl-[4px] pr-[10px] mr-[6px] cursor-pointer'>
            <img class='w-[16px] h-[16px] bg-[gray] mr-[8px]' />
            <div class='text-[white]'>{{item.name}}</div>
          </div>
        </template>
      </div>

      <!-- action right list -->
      <div class='inline-flex flex-shrink-0'>
        <template v-for='item in _actionRightList' :key='item.ident'>
          <div class='inline-flex items-center pl-[4px] pr-[10px] mr-[6px] cursor-pointer'>
            <img class='w-[16px] h-[16px] bg-[gray] mr-[8px]' />
            <div class='text-[white]'>{{item.name}}</div>
          </div>
        </template>
      </div>
    </div>

  </div>

</div>
</template>
<script setup name='TheNavbar'>

const _actionLeftList = [
        { ident:'shouYe', icon:'', name:'首页', },
        { ident:'zhenRen', icon:'', name:'真人', },
        { ident:'tiYu', icon:'', name:'体育', },
        { ident:'dianYou', icon:'', name:'电游', },
        { ident:'buYu', icon:'', name:'捕鱼', },
        { ident:'qiPai', icon:'', name:'棋牌', },
        { ident:'caiPiao', icon:'', name:'彩票', },
      ],
      _actionRightList = [
        { ident:'xx', icon:'', name:'APP下载', },
      ]
;

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
  width:100%; height:80px;
}
</style>
