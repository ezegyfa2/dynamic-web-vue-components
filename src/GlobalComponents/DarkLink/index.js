export default {
    install(Vue) {
        require('helper-vue-components/Link').default.install(Vue)

        Vue.component('dynamic-web-dark-link', () => import('./Component.vue'))
    }
}