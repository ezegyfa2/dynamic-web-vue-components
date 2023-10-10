export default {
    install(Vue) {
        Vue.component('dynamic-web-request-offer-pagination', () => import('./Component.vue'))
    }
}