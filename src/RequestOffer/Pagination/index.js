export default {
    install(Vue) {
        registerVueComponent(
            'dynamic-web-request-offer-pagination',
            require('./Component.vue').default,
            Vue
        )
    }
}