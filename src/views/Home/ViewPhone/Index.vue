<template>
<div class='vp_model'>

  <TheNavbar />

  <TheSubTitle name='真人赌场' />
  <ViewZhenRen />

</div>
</template>
<script setup name='HomeViewPhone'>
import TheNavbar from './_view/TheNavbar.vue';
import TheSubTitle from './_view/TheSubTitle.vue';
import ViewZhenRen from './_view/ViewZhenRen.vue';

</script>
<style scoped>
.vp_model {
  width:100%; min-height:100vh;
}
</style>
