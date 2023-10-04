export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/ButtonNavigationLink')

        registerVueComponent(
            'dynamic-web-button-navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}
