export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown').default.install(Vue)

        Vue.component('dynamic-web-list-dropdown', () => import('./Component.vue'))
    }
}