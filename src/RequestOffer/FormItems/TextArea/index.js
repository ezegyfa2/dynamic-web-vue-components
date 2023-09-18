export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/TextArea').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-textarea',
            require('./Component.vue').default,
            Vue
        )
    }
}