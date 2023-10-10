export default {
    install(Vue) {
        require('helper-vue-components/Timeline/Timeline').default.install(Vue)

        Vue.component('dynamic-web-timeline', () => import('./Component.vue'))
    }
}