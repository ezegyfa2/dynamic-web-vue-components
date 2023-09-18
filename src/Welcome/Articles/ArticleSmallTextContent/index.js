export default {
    install(Vue) {
        require('text-contents-vue-components/SmallTextContent').default.install(Vue)

        registerVueComponent(
            'dynamic-web-article-small-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}