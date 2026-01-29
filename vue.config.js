const { defineConfig } = require('@vue/cli-service'),
      AutoImport = require('unplugin-auto-import/webpack'),
      Components = require('unplugin-vue-components/webpack'),
      { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
;

// module.exports = defineConfig({
module.exports = {
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    port: 8084,
  },
  pluginOptions: {
    // https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    windicss: {
    },
  },
  configureWebpack:{
    // resolve:{
    //   alias:{
    //     components:'@/components'
    //   }
    // },
    plugins:[
      AutoImport({
        // imports: ['vue'],
        resolvers:[ElementPlusResolver()],
      }),
      Components({
        resolvers:[ElementPlusResolver()],
        // dirs: ['src/components'],
      })
    ]
  }
}
