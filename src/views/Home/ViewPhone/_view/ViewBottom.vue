<template>
<div class='w-full mb-[30px]'>

  <div class='g-phone-width flex justify-center'>

    <template v-for='item in _list' :key='item.ident'>
      <div class='text-[14px] text-[white] mx-[40px]'>{{item.name}}</div>
    </template>

  </div>

</div>
</template>
<script setup name='ViewBottom'>

const _list = [
  { ident:'x03', name:'合作共赢', },
  { ident:'x01', name:'关于我们', },
]

</script>
<style scoped>
</style>
