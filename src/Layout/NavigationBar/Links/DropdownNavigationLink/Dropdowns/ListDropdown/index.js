export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown').default.install(Vue)

        registerVueComponent(
            'dynamic-web-list-dropdown',
            require('./Component.vue').default,
            Vue
        )
    }
}