<template>
<div class=''>

  <template v-if='_platform === "PC"'>
    <ViewPC />
  </template>
  <template v-else-if='_platform === "PHONE"'>
    <ViewPhone />
  </template>

</div>
</template>
<script setup name='Home'>
import ViewPC from './ViewPC/Index.vue';
import ViewPhone from './ViewPhone/Index.vue';
import { getPlatform } from '@/utils/tools';

const _platform = getPlatform();

</script>
<style scoped>
</style>
