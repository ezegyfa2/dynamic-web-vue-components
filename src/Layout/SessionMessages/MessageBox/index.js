export default {
    install(Vue) {
        require('helper-vue-components/SessionMessages/MessageBox').default.install(Vue)

        registerVueComponent(
            'dynamic-web-message-box',
            require('./Component.vue').default,
            Vue
        )
    }
}