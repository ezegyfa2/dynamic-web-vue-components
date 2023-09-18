export default {
    install(Vue) {
        require('helper-vue-components/IconLinks/ButtonIconLink2').default.install(Vue)

        registerVueComponent(
            'dynamic-web-button-icon-link',
            require('./Component.vue').default,
            Vue
        )
    }
}