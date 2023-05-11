const { resolve } = require('path')

module.exports = {
    input: {
        path: resolve('./lang'),
        filename: 'zh.json'
    },
    translate: {
        on: false,
        lang: ['en'],
        secretId: 'your id',
        secretKey: 'your key'
    }
}