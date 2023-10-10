export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Email').default.install(Vue)

        Vue.component('dynamic-web-request-offer-email-input', () => import('./Component.vue'))
    }
}