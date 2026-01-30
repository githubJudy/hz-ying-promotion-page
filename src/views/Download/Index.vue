<template>
<div class=''>

  <TheNavbar :type='_platform' />

  <template v-if='_platform === "PC"'>
    <ViewPC />
  </template>
  <template v-else-if='_platform === "PHONE"'>
    <ViewPhone />
  </template>

</div>
</template>
<script setup name='Home'>
import TheNavbar from '@/components/TheNavbar/Index.vue';
import ViewPC from './ViewPC/Index.vue';
import ViewPhone from './ViewPhone/Index.vue';
import { getPlatform } from '@/utils/tools';

const _platform = getPlatform();

</script>
<style scoped>
</style>
