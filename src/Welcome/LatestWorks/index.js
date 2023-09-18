export default {
    install(Vue) {
        window.templates.dynamic_web_latest_works = require('./Template').default
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContent').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContentWithButton').default.install(Vue)
        
        registerVueComponent(
            'dynamic-web-latest-works',
            require('./Component.vue').default,
            Vue
        )
    }
}