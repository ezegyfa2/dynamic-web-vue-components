export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Number').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-number-input',
            require('./Component.vue').default,
            Vue
        )
    }
}