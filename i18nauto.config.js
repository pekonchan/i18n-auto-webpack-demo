const { resolve } = require('path')

module.exports = {
    input: {
        path: resolve('./lang'),
        filename: 'zh.json'
    },
    translate: {
        on: false, // 要自动翻译，请设置true
        lang: ['en'],
        secretId: 'your id', // 请输入你的腾讯翻译api的用户secretId
        secretKey: 'your key' // 请输入你的腾讯翻译api的用户secretKey
    }
}