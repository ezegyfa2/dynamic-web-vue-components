export default {
    install(Vue) {
        require('helper-vue-components/Headers/ImageBackgroundHeader').default.install(Vue)

        registerVueComponent(
            'dynamic-web-header',
            require('./Component.vue').default,
            Vue
        )
    }
}