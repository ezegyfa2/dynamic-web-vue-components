export default {
    install(Vue) {
        require('helper-vue-components/Team/Team').default.install(Vue)
        
        registerVueComponent(
            'dynamic-web-team',
            require('./Component.vue').default,
            Vue
        )
    }
}