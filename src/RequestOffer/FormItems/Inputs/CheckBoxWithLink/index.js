export default {
    install(Vue) {
        require('../CheckBox').default.install(Vue)

        Vue.component('dynamic-web-request-offer-checkbox-input-with-link', () => import('./Component.vue'))
    }
}