export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItems/Inputs/CheckBox').default.install(Vue)

        Vue.component('dynamic-web-request-offer-checkbox-input', () => import('./Component.vue'))
    }
}