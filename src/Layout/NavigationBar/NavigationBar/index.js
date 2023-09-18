export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/CollapsableNavigationBar').default.install(Vue)

        registerVueComponent(
            'dynamic-web-navigation-bar',
            require('./Component.vue').default,
            Vue
        )
    }
}