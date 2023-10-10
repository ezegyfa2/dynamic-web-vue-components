export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/ButtonNavigationLink')

        Vue.component('dynamic-web-button-navigation-link', () => import('./Component.vue'))
    }
}
