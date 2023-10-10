export default {
    install(Vue) {
        require('text-contents-vue-components/TextContent').default.install(Vue)

        registerVueComponent(
            'la75-two-title-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}