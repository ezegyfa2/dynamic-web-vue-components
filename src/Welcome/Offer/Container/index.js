export default {
    install(Vue) {
        require('helper-vue-components/Containers/Col4Container').default.install(Vue)

        registerVueComponent(
            'dynamic-web-offer-container',
            require('./Component.vue').default,
            Vue
        )
    }
}