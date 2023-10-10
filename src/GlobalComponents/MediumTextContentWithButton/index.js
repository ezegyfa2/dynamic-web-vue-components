export default {
    install(Vue) {
        require('text-contents-vue-components/MediumTextContent').default.install(Vue)

        Vue.component('dynamic-web-medium-text-content-with-button', () => import('./Component.vue'))
    }
}