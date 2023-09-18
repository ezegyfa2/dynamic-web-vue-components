export default {
    install(Vue) {
        registerVueComponent(
            'dynamic-web-services',
            require('./Component.vue').default,
            Vue
        )
    }
}