<template>
<div>

  <template v-if='type === "PC"'>
    <ViewPC />
  </template>
  <template v-else-if='type === "PHONE"'>
    <ViewPhone />
  </template>

</div>
</template>
<script setup name='Home'>
import { defineProps } from 'vue';
import ViewPC from './ViewPC/Index.vue';
import ViewPhone from './ViewPhone.vue';

defineProps({
  type: String, // [PC, PHONE]
})

</script>
<style scoped>
</style>
