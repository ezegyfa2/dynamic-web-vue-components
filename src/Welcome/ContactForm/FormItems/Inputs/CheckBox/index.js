export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)

        registerVueComponent(
            'dynamic-web-contact-checkbox-input',
            require('./Component.vue').default,
            Vue
        )
    }
}