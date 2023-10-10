export default {
    install(Vue) {
        require('helper-vue-components/IconLinks/ButtonIconLink2').default.install(Vue)

        Vue.component('dynamic-web-button-icon-link', () => import('./Component.vue'))
    }
}