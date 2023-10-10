export default {
    install(Vue) {
        window.templates.dynamic_web_thank_you = require('./Template').default
        require('dynamic-web-vue-components/Layout').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContent').default.install(Vue)

        Vue.component('dynamic-web-thank-you', () => import('./Component.vue'))
    }
}