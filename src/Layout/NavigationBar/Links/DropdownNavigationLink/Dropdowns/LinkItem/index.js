export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem').default.install(Vue)

        registerVueComponent(
            'dynamic-web-link-dropdown-item',
            require('./Component.vue').default,
            Vue
        )
    }
}