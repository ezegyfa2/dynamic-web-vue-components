export default {
    install(Vue) {
        require('text-contents-vue-components/TextContentWithMiddleLine').default.install(Vue)

        Vue.component('dynamic-web-text-content-with-middle-line', () => import('./Component.vue'))
    }
}