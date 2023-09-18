export default {
    install(Vue) {
        window.templates.dynamic_web_footer = require('./Template').default
        require('dynamic-web-vue-components/GlobalComponents/ButtonIconLink').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/DarkLink').default.install(Vue)
        require('helper-vue-components/Footer/Footer').default.install(Vue)
        require('helper-vue-components/IconLinks/WerticallyIconLinks').default.install(Vue)

        registerVueComponent(
            'dynamic-web-footer',
            require('./Component.vue').default,
            Vue
        )
    }
}