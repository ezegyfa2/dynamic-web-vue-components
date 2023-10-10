export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem').default.install(Vue)

        Vue.component('dynamic-web-link-dropdown-item', () => import('./Component.vue'))
    }
}