export default {
    install(Vue) {
        require('text-contents-vue-components/TwoTitleTextContent').default.install(Vue)

        registerVueComponent(
            'dynamic-web-two-title-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}