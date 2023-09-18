export default {
    install(Vue) {
        require('text-contents-vue-components/TextContentWithIcon').default.install(Vue)
        
        registerVueComponent(
            'dynamic-web-text-content-with-icon',
            require('./Component.vue').default,
            Vue
        )
    }
}