export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Text').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-text-input',
            require('./Component.vue').default,
            Vue
        )
    }
}