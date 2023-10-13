export default {
    install(Vue) {
        require('text-contents-vue-components/MediumTextContent').default.install(Vue)

        Vue.component('dynamic-web-white-medium-text-content', () => import('./Component.vue'))
    }
}
