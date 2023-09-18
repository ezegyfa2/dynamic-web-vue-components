export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink').default.install(Vue)

        registerVueComponent(
            'dynamic-web-dropdown-navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}