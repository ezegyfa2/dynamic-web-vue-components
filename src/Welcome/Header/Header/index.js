export default {
    install(Vue) {
        require('helper-vue-components/Headers/ImageBackgroundHeader').default.install(Vue)

        Vue.component('dynamic-web-header', () => import('./Component.vue'))
    }
}