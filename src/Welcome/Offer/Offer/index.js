export default {
    install(Vue) {
        registerVueComponent(
            'dynamic-web-offer',
            require('./Component.vue').default,
            Vue
        )
    }
}