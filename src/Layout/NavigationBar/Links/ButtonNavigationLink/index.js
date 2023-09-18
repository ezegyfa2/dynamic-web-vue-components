export default {
    install(Vue) {
        registerVueComponent(
            'dynamic-web-button-navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}