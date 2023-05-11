const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      // 这里设置loader，把js文件和vue文件里的script标签内的脚本设置经过i18n-auto-webpack/loader的编译，实现转译中文为vue-i18n提供的i18n.tc方法
      .rule('js')
        .use('i18n-auto-loader')
            .loader('i18n-auto-webpack/loader')
            .options({
                name: 'i18n.tc',
                alias: ['$t', /\.\$t$/],
                watch: true,
                dependency: {
                    name: 'i18n',
                    value: '@/lang'
                }
            })
            .before('babel-loader')
            .end()
        .end()
      // 这里设置loader，把vue文件的template部分设置经过i18n-auto-webpack/loader的编译，实现转译中文为vue-i18n提供的i18n.tc方法
      .rule('vueTemplateRender')
        .test(/\.vue$/)
        .resourceQuery(/type=template/)
        .enforce('post')
        .use('i18n-auto-loader')
            .loader('i18n-auto-webpack/loader')
            .options({
                name: 'i18n.tc',
                alias: ['$t', '_vm.$t'],
                watch: true,
                dependency: {
                    name: 'i18n',
                    value: '@/lang'
                }
            })
    // 这里设置仅在本地开发环境下生成国际化词条配置文件
    if (process.env.NODE_ENV === 'development') {
      config.plugin('i18n-auto-webpack')
        .use('i18n-auto-webpack/plugin', [{
          watch: true
      }])
    }
  }
})
