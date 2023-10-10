export default {
    install(Vue) {
        require('whatwg-fetch')
        require('../Pagination').default.install(Vue)
        require('helper-vue-components/Form/MultiPageForm').default.install(Vue)
        
        Vue.component('dynamic-web-request-offer-form', () => import('./Component.vue'))
    }
}