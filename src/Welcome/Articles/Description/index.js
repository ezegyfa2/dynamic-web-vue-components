export default {
    install(Vue) {
        require('description-vue-components/WhiteDescription').default.install(Vue)

        registerVueComponent(
            'dynamic-web-description-section',
            require('./Component.vue').default,
            Vue
        )
    }
}