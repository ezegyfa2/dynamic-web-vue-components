export default {
    install(Vue) {
        require('text-contents-vue-components/MediumTextContent').default.install(Vue)

        registerVueComponent(
            'la75-small-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}