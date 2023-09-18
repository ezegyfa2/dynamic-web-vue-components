export default {
    install(Vue) {
        require('helper-vue-components/Timeline/Timeline').default.install(Vue)

        registerVueComponent(
            'dynamic-web-timeline',
            require('./Component.vue').default,
            Vue
        )
    }
}