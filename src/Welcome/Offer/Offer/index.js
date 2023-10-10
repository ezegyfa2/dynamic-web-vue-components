export default {
    install(Vue) {
        Vue.component('dynamic-web-offer', () => import('./Component.vue'))
    }
}