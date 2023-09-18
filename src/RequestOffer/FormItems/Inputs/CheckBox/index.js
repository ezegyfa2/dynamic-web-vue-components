export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItems/Inputs/CheckBox').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-checkbox-input',
            require('./Component.vue').default,
            Vue
        )
    }
}