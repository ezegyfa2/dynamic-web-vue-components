export default {
    install(Vue) {
        require('helper-vue-components/Roadmap').default.install(Vue)

        Vue.component('dynamic-web-how-we-do', () => import('./Component.vue'))
    }
}