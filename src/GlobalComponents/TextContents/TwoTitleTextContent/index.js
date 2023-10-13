export default {
    install(Vue) {
        require('text-contents-vue-components/TextContent').default.install(Vue)

        Vue.component('la75-two-title-text-content', () => import('./Component.vue'))
    }
}