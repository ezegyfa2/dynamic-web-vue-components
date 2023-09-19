export default {
    install(Vue) {
        require('../CheckBox').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-checkbox-input-with-link',
            require('./Component.vue').default,
            Vue
        )
    }
}