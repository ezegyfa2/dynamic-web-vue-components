export default {
    install(Vue) {
        require('helper-vue-components/Roadmap').default.install(Vue)

        registerVueComponent(
            'dynamic-web-how-we-do',
            require('./Component.vue').default,
            Vue
        )
    }
}