export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)

        Vue.component('dynamic-web-request-offer-locked-checkbox-input-with-text-content', () => import('./Component.vue'))
    }
}