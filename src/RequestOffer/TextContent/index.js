export default {
    install(Vue) {
        require('text-contents-vue-components/MediumTextContent').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}