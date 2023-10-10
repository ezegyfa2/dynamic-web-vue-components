export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Select').default.install(Vue)

        registerVueComponent(
            'dynamic-web-contact-select',
            require('./Component.vue').default,
            Vue
        )
    }
}