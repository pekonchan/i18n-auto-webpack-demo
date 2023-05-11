# i18n-auto-webpack-demo

这里是一个vue2 + vue-cli + vue-i18n v8 的自动国际化工程演示demo 。 vue-cli 使用的 vue-loader 是v15

> 请注意，若你是vue2的项目，请使用vue-i18n v8版本，而不是v9, v9是搭配vue3的

要运行项目实现自动翻译，请在根目录下的`i18nauto.config.js`文件中，设置你注册的腾讯翻译api的`secretId`和`secretKey`，并把`on`设置为`true`

需要留意的文件有

- 根目录下的`vue.config.js`，这里设置了webpack的loader和plugin，实现转译代码和生成词条配置文件。 可看文件中的注释
- 根目录下的`i18nauto.config.js`，这里是`i18n-auto-webpack`工具的配置文件
- 根目录下的`lang`文件夹，就是生成的词条配置文件所在目录
- `src/lang`目录下，就是使用`vue-i18n`实现的国际化转换函数的基本设置，当然你也可以用其他类库来实现国际化转换，或自己写。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
