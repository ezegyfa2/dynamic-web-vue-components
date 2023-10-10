export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/NavigationLink').default.install(Vue)

        Vue.component('dynamic-web-navigation-link', () => import('./Component.vue'))
    }
}