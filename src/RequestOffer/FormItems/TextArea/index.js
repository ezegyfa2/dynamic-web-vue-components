export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/TextArea').default.install(Vue)

        Vue.component('dynamic-web-request-offer-textarea', () => import('./Component.vue'))
    }
}