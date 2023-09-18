export default {
    install(Vue) {
        require('helper-vue-components/Team/Member').default.install(Vue)
        
        registerVueComponent(
            'dynamic-web-team-member',
            require('./Component.vue').default,
            Vue
        )
    }
}