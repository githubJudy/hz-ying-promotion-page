<template>
<div class='tn_model mb-[20px] relative'>

  <div class='g-model-width border-box pt-[10px]'>

    <div class='w-full flex'>
      <!-- logo -->
      <div class='w-[128px] h-[46px]'>
        <img class='w-full h-full' src='@/assets/imgs/logo/logo.png' />
      </div>
    </div>

    <div class='bg-[#212a65] w-full h-[2px] mt-[10px] mb-[2px]'></div>

    <div class='tn_second w-full flex'>
      <!-- action left list -->
      <div class='tn_se_left inline-flex flex-1'>
        <!-- <template v-for='(item,index) in _actionLeftList' :key='item.ident'> -->
        <template v-for='item in _actionLeftList' :key='item.ident'>
          <el-popover popper-class='!py-[0] !border-[0]' placement='bottom' width='100%' :show-arrow='false' :offset='0'>
            <template #default>
              <template v-if='item.ident !== "shouYe"'>
                <div class='vp_model w-full h-[200px] absolute bottom-[-200px] left-0 z-100'>
                  <div class='g-model-width'>
                    <template v-if='item.ident === "zhenRen"'>
                      <ViewPopZhenRen />
                    </template>
                    <template v-else-if='item.ident === "tiYu"'>
                      <ViewPopupTiYu />
                    </template>
                    <template v-else-if='item.ident === "dianYou"'>
                      <ViewPopupDianYou />
                    </template>
                    <template v-else-if='item.ident === "buYu"'>
                      <ViewPopupBuYu />
                    </template>
                    <template v-else-if='item.ident === "qiPai"'>
                      <ViewPopupQiPai />
                    </template>
                    <template v-else-if='item.ident === "caiPiao"'>
                      <ViewCaiPiao />
                    </template>
                  </div>
                </div>
              </template>
            </template>
            <template #reference>
              <div
                :class='[
                  "tn_se_le_view inline-flex items-center pl-[4px] pr-[10px] py-[10px] mr-[20px] cursor-pointer pr-[10px]"/*,
                  index === _actionLeftIndex && "_bright"*/
                ]'
                @click='_bindHome'
              >
                <img class='w-[30px] h-[30px] mr-[6px]' :src='require(`@/assets/imgs/navbar/${item.icon}`)' />
                <div class='text-[20px] text-[#d4d4d4]'>{{item.name}}</div>
              </div>
            </template>
          </el-popover>
        </template>
      </div>

      <!-- action right list -->
      <div class='inline-flex flex-shrink-0'>
        <template v-for='item in _actionRightList' :key='item.ident'>

          <template v-if='item.ident === "onlineService"'>
            <el-popover popper-class='!py-[0] !border-[0]' placement='bottom' width='100%' :show-arrow='false' :offset='0'>
              <template #default>
                <div class='vp_model w-full h-[200px] absolute bottom-[-200px] left-0 z-100'>
                  <div class='g-model-width flex justify-center box-border pt-[40px]'>

                    <div class='bg-[#151a36] flex box-border py-[20px] px-[20px] rounded-[6px] mx-[40px]'>
                      <div class='w-[80px] h-[80px] rounded-[6px] g-overflow flex-shrink-0 mr-[20px]'>
                        <img class='w-full h-full' src='@/assets/imgs/download/down-99-online-service.png' />
                      </div>
                      <div class='flex-1 box-border pt-[4px]'>
                        <div class='w-full text-[20px] text-[#aab2bd] mb-[20px]'>99在线客服</div>
                        <div class='flex flex-wrap'>
                          <div
                            class='g-bg-01 w-[fit-content] text-[white] py-[4px] px-[12px] rounded-[4px] cursor-pointer mr-[10px] mb-[6px]'
                            @click='_bindLink("https://k.9955599.com/chat/index?noCanClose=1&token=a1ec5dc674d238ae08689c6bba2a7af2")'
                            >聊天
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='bg-[#151a36] flex box-border py-[20px] px-[20px] rounded-[6px] mx-[40px]'>
                      <div class='w-[80px] h-[80px] rounded-[6px] g-overflow flex-shrink-0 mr-[20px]'>
                        <img class='w-full h-full' src='@/assets/imgs/download/down-99-service-call.png' />
                      </div>
                      <div class='flex-1 box-border pt-[4px]'>
                        <div class='w-full text-[20px] text-[#aab2bd] mb-[20px]'>客服联系电话</div>
                        <div class='flex flex-wrap'>
                          <div
                            class='g-bg-01 w-[fit-content] text-[white] py-[4px] px-[12px] rounded-[4px] cursor-pointer mr-[10px] mb-[6px]'
                            @click='_bindLink("")'
                            >+95 9885965678
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </template>
              <template #reference>
                <div class='inline-flex items-center pl-[4px] pr-[10px] mr-[6px] cursor-pointer' @click='_bindDownload'>
                  <template v-if='item.icon'>
                    <img class='w-[30px] h-[30px] mr-[6px]' :src='require(`@/assets/imgs/navbar/${item.icon}`)' />
                  </template>
                  <div class='text-[#d4d4d4]'>{{item.name}}</div>
                </div>
              </template>
            </el-popover>
          </template>

          <template v-else>
            <div class='inline-flex items-center pl-[4px] pr-[10px] mr-[6px] cursor-pointer' @click='_bindDownload'>
              <template v-if='item.icon'>
                <img class='w-[30px] h-[30px] mr-[6px]' :src='require(`@/assets/imgs/navbar/${item.icon}`)' />
              </template>
              <div class='text-[#d4d4d4]'>{{item.name}}</div>
            </div>
          </template>

        </template>
      </div>
    </div>

  </div>

</div>
</template>
<script setup name='TheNavbar'>
// import { ref, } from 'vue';
import ViewPopZhenRen from './ViewPopZhenRen.vue';
import ViewPopupTiYu from './ViewPopupTiYu.vue';
import ViewPopupDianYou from './ViewPopupDianYou.vue';
import ViewPopupBuYu from './ViewPopupBuYu.vue';
import ViewPopupQiPai from './ViewPopupQiPai.vue';
import ViewCaiPiao from './ViewCaiPiao.vue';
import router from '@/routers';

const _actionLeftList = [
        { ident:'shouYe', icon:'navbar-menu-shouYe.svg', name:'首页', },
        { ident:'zhenRen', icon:'navbar-menu-zhenRen.svg', name:'真人视讯', },
        // { ident:'tiYu', icon:'navbar-menu-tiYu.svg', name:'体育', },
        // { ident:'dianYou', icon:'navbar-menu-dianYou.svg', name:'电游', },
        // { ident:'buYu', icon:'navbar-menu-buYu.avif', name:'捕鱼', },
        // { ident:'qiPai', icon:'navbar-menu-qiPai.avif', name:'棋牌', },
        { ident:'caiPiao', icon:'navbar-menu-caiPiao.svg', name:'彩票', },
      ],
      // _actionLeftIndex = ref(0),
      _actionRightList = [
        { ident:'onlineService', icon:'', name:'在线客服', },
        { ident:'download', icon:'navbar-menu-appDownload.svg', name:'APP下载', },
      ]
;

function _bindHome() {
  if (router.currentRoute.value.name !== 'Home') {
    router.replace('/');
  }
}

function _bindDownload() {
  if (router.currentRoute.value.name !== 'Download') {
    router.push('/Download');
  }
}

function _bindLink(link) {
  if (!link) return;

  window.open(link, '_blank');
}

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
  width:100%; /* height:80px; */
}

.tn_second {
}
  .tn_se_left {
  }
    .tn_se_le_view {
      position:relative;
    }
      .tn_se_le_view:hover :after {
        content:'';
        background:linear-gradient(-90deg, #2d61ff, rgba(80, 119, 237, .4));
        width:100%; height:3px;
        position:absolute; bottom:0; left:4px;
      }
      /* .tn_se_le_view._bright :after {
        content:'';
        background:linear-gradient(-90deg, #2d61ff, rgba(80, 119, 237, .4));
        width:100%; height:3px;
        position:absolute; bottom:0; left:4px;
      } */

.vp_model {
  background:rgba(12, 14, 43, .9);
  backdrop-filter:blur(5px);
}
</style>
