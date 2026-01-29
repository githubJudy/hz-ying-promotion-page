<template>
<div class='w-full mb-[20px]'>

  <div class='g-model-width grid grid-cols-12 gap-x-[20px] gap-y-[20px]'>
    <template v-for='(item,index) in _list' :key='item.ident'>
      <div
        :class='[
          "vzr_view h-[148px] relative cursor-pointer",
          `_index-${index}`,
          (
            index === 0 ? "col-start-1 col-end-7" :
            index === 1 ? "col-start-7 col-end-13" :
            "col-span-4"
          ),
        ]'
      >
        <!-- bg img -->
        <div
          :class='[
            "w-full absolute bottom-0 left-0",
            (
              (index === 0 || index === 1) ? "h-[calc(100%_-_14px)]" : "h-full"
            ),
            ((index === 3 || index === 4) && "h-[calc(100%_-_18px)] top-[18px]")
          ]'
        >
          <img class='w-full h-full' :src='require(`@/assets/imgs/tiyu/${item.bgImg}`)' />
        </div>

        <!-- people img -->
        <div
          :class='[
            "vzr_vi_people w-[345px] h-[148px] absolute top-0 right-0",
            (
              (index === 0 || index === 1) ? "w-[345px]" : "w-[226px]"
            ),
          ]'
        >
          <img class='w-full h-full' :src='require(`@/assets/imgs/tiyu/${item.peopleImg}`)' />
        </div>

        <div class='w-full text-[22px] text-[#aab2bd] absolute top-[30px] left-0 border-box px-[20px] py-[20px]'>{{item.name}}</div>
        <div class='w-full text-[18px] text-[#aab2bd] absolute bottom-0 left-0 border-box px-[20px] py-[20px]'>{{item.prompt}}</div>
      </div>
    </template>
  </div>

</div>
</template>
<script setup name='ViewTiYu'>

const _list = [
  { ident:'ident01', bgImg:'tiyu-a-bg.avif', peopleImg:'tiyu-a-people.avif', name:'BTI体育', prompt:'顶级赔率 迅速结算', },
  { ident:'ident02', bgImg:'tiyu-b-bg.avif', peopleImg:'tiyu-b-people.avif', name:'沙巴体育', prompt:'亚洲版 欧洲版 投注多样', },
  { ident:'ident03', bgImg:'tiyu-c-bg.avif', peopleImg:'tiyu-c-people.avif', name:'FB体育', prompt:'最全赛事 提前结算', },
  { ident:'ident04', bgImg:'tiyu-d-bg.avif', peopleImg:'tiyu-d-people.avif', name:'IM体育', prompt:'最多滚球玩法 实时赛事直播', },
  { ident:'ident05', bgImg:'tiyu-e-bg.avif', peopleImg:'tiyu-e-people.avif', name:'IM电竞', prompt:'最全电竞赛事', },
]

</script>
<style scoped>
.vzr_view {
}
  .vzr_view:hover {
  }
    /*========================================================================*/
    .vzr_view._index-0:hover .vzr_vi_people,
    .vzr_view._index-1:hover .vzr_vi_people {
      animation:_ani-move-people-a .25s 1 forwards;
    }
    @keyframes _ani-move-people-a {
      from {
        width:345px; height:148px;
        top:0; right:0;
      }
      to {
        width:calc(345px + 16px); height:calc(148px + 16px);
        top:-16px; right:-8px;
      }
    }
    /*========================================================================*/
    .vzr_view._index-2:hover .vzr_vi_people,
    .vzr_view._index-3:hover .vzr_vi_people,
    .vzr_view._index-4:hover .vzr_vi_people {
      animation:_ani-move-people-b .25s 1 forwards;
    }
    @keyframes _ani-move-people-b {
      from {
        width:226px; height:148px;
        top:0; right:0;
      }
      to {
        width:calc(226px + 16px); height:calc(148px + 16px);
        top:-16px; right:-8px;
      }
    }
    /*========================================================================*/
</style>
