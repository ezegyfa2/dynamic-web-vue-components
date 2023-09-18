export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Select').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-select',
            require('./Component.vue').default,
            Vue
        )
    }
}