export default {
    install(Vue) {
        require('text-contents-vue-components/TextContentWithUpperLine').default.install(Vue)

        registerVueComponent(
            'dynamic-web-upper-line-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}