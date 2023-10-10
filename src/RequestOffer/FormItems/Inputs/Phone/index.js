export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Phone').default.install(Vue)

        Vue.component('dynamic-web-request-offer-phone-input', () => import('./Component.vue'))
    }
}