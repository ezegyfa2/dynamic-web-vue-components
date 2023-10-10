export default {
    install(Vue) {
        window.templates.dynamic_web_latest_works = require('./Template').default
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContent').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContentWithButton').default.install(Vue)
        
        Vue.component('dynamic-web-latest-works', () => import('./Component.vue'))
    }
}