export default {
    install(Vue) {
        require('../MessageBox').default.install(Vue)

        Vue.component('dynamic-web-success-message', () => import('./Component.vue'))
    }
}