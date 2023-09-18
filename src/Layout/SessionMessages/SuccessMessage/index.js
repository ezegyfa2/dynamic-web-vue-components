export default {
    install(Vue) {
        require('../MessageBox').default.install(Vue)

        registerVueComponent(
            'dynamic-web-success-message',
            require('./Component.vue').default,
            Vue
        )
    }
}