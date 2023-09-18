export default {
    install(Vue) {
        require('../Pagination').default.install(Vue)
        require('helper-vue-components/Form/MultiPageForm').default.install(Vue)
        
        registerVueComponent(
            'dynamic-web-request-offer-form',
            require('./Component.vue').default,
            Vue
        )
    }
}