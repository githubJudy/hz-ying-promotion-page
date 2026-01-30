<template>
<div class=''>

  <!-- <TheNavbar type='PC' /> -->
  <TheNavbar type='PHONE' />

  <!-- <ViewPC /> -->
  <ViewPhone />

</div>
</template>
<script setup name='Home'>
import TheNavbar from '@/components/TheNavbar/Index.vue';
// import ViewPC from './ViewPC/Index.vue';
import ViewPhone from './ViewPhone/Index.vue';

</script>
<style scoped>
</style>
