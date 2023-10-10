export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Select').default.install(Vue)

        Vue.component('dynamic-web-request-offer-select', () => import('./Component.vue'))
    }
}