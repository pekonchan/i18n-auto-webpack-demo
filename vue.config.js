const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
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

    if (process.env.NODE_ENV === 'development') {
      config.plugin('i18n-auto-webpack')
        .use('i18n-auto-webpack/plugin', [{
          watch: true
      }])
    }
  }
})
