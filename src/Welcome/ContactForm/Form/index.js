export default {
    install(Vue) {
        require('helper-vue-components/Form/Form').default.install(Vue)
        require('helper-vue-components/CsrfInput').default.install(Vue)
        
        registerVueComponent(
            'dynamic-web-contact-form',
            require('./Component.vue').default,
            Vue
        )
    }
}