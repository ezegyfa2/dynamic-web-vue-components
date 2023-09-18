export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItems/Inputs/CheckBox').default.install(Vue)
        require('../RequestOfferSmallTextContent').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-checkbox-input-with-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}