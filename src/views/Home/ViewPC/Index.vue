<template>
<div class='vp_model'>

  <TheNavbar />

  <TheSwiper />

</div>
</template>
<script setup name='HomeViewPC'>
import TheNavbar from './_view/TheNavbar.vue';
import TheSwiper from './_view/TheSwiper.vue';

</script>
<style scoped>
.vp_model {
  width:100%; min-height:100vh;
}
</style>
