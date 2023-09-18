export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItems/Radio').default.install(Vue)

        registerVueComponent(
            'dynamic-web-request-offer-radio',
            require('./Component.vue').default,
            Vue
        )
    }
}