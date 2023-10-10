export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Number').default.install(Vue)

        Vue.component('dynamic-web-request-offer-number-input', () => import('./Component.vue'))
    }
}