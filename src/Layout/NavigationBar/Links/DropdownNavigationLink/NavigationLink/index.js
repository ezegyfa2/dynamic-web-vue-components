export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink').default.install(Vue)

        Vue.component('dynamic-web-dropdown-navigation-link', () => import('./Component.vue'))
    }
}