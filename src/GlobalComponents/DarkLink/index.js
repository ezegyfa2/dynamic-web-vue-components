export default {
    install(Vue) {
        require('helper-vue-components/Link').default.install(Vue)

        registerVueComponent(
            'dynamic-web-dark-link',
            require('./Component.vue').default,
            Vue
        )
    }
}