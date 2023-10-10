export default {
    install(Vue) {
        require('helper-vue-components/Containers/Col4Container').default.install(Vue)

        Vue.component('dynamic-web-offer-container', () => import('./Component.vue'))
    }
}