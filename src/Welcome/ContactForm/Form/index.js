export default {
    install(Vue) {
        require('helper-vue-components/Form/Form').default.install(Vue)
        require('helper-vue-components/CsrfInput').default.install(Vue)
        
        Vue.component('dynamic-web-contact-form', () => import('./Component.vue'))
    }
}