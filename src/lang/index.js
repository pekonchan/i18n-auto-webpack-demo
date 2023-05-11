import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const locale = 'zh' // 当前你所需的语言环境，此demo写死zh，使用者自己需按需获取这个真实值
let i18n = new VueI18n({
    locale,
    messages: {
        [locale]: require(`/lang/${locale}.json`)
    }
})

export default i18n