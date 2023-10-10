export default {
    install(Vue) {
        require('text-contents-vue-components/TextContentWithUpperLine').default.install(Vue)

        Vue.component('dynamic-web-upper-line-text-content', () => import('./Component.vue'))
    }
}