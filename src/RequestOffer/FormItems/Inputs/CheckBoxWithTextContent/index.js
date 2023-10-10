export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItems/Inputs/CheckBox').default.install(Vue)
        require('../RequestOfferSmallTextContent').default.install(Vue)

        Vue.component('dynamic-web-request-offer-checkbox-input-with-text-content', () => import('./Component.vue'))
    }
}