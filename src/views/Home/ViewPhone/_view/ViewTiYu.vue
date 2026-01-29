<template>
<div class='w-full mb-[20px]'>

  <div class='g-phone-width grid grid-cols-12 gap-x-[10px] gap-y-[10px]'>
    <template v-for='(item,index) in _list' :key='item.ident'>
      <div
        :class='[
          "h-[130px] relative cursor-pointer",
          `_index-${index}`,
          (
            index === 0 ? "col-start-1 col-end-13" :
            // index === 1 ? "col-start-1 col-end-7" :
            // index === 2 ? "col-start-7 col-end-13" :
            // index === 3 ? "col-start-1 col-end-7" :
            // index === 4 ? "col-start-7 col-end-13" :
            "col-span-6"
          ),
        ]'
      >
        <div class='w-full h-full'>
          <img class='w-full h-full' :src='require(`@/assets/imgs/tiyu/${item.img}`)' />
        </div>
      </div>
    </template>
  </div>

</div>
</template>
<script setup name='ViewTiYu'>

const _list = [
  { ident:'ident01', img:'m-tiyu-a.webp', },
  { ident:'ident02', img:'m-tiyu-b.webp', },
  { ident:'ident03', img:'m-tiyu-c.webp', },
  { ident:'ident04', img:'m-tiyu-d.webp', },
  { ident:'ident05', img:'m-tiyu-e.webp', },
]

</script>
<style scoped>
</style>
