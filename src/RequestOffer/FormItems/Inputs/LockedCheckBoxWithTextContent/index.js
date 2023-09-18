export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-locked-checkbox-input-with-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}