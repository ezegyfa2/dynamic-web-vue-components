export default {
    install(Vue) {
        require('description-vue-components/WhiteDescription').default.install(Vue)

        Vue.component('dynamic-web-description-section', () => import('./Component.vue'))
    }
}