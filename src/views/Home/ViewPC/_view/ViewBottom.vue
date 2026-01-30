<template>
<div class='w-full mb-[40px]'>

  <div class='g-model-width flex justify-center'>

    <template v-for='item in _list' :key='item.ident'>
      <div class='text-[20px] text-[#848484] mx-[40px]'>{{item.name}}</div>
    </template>

  </div>

</div>
</template>
<script setup name='ViewBottom'>

const _list = [
  { ident:'x01', name:'关于我们', },
  { ident:'x02', name:'隐私政策', },
  { ident:'x03', name:'客服联系电话: +95 9885965678', },
]

</script>
<style scoped>
</style>
