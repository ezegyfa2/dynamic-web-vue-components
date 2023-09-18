export default {
    install(Vue) {
        require('text-contents-vue-components/TextContentWithMiddleLine').default.install(Vue)

        registerVueComponent(
            'dynamic-web-text-content-with-middle-line',
            require('./Component.vue').default,
            Vue
        )
    }
}