export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Email').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-email-input',
            require('./Component.vue').default,
            Vue
        )
    }
}