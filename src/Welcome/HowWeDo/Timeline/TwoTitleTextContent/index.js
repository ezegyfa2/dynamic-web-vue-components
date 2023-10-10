export default {
    install(Vue) {
        require('text-contents-vue-components/TwoTitleTextContent').default.install(Vue)

        Vue.component('dynamic-web-two-title-text-content', () => import('./Component.vue'))
    }
}