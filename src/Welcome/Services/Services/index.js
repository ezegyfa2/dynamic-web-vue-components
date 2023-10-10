export default {
    install(Vue) {
        Vue.component('dynamic-web-services', () => import('./Component.vue'))
    }
}