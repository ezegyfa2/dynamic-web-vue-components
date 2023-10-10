export default {
    install(Vue) {
        require('helper-vue-components/Form/FormItems/Radio').default.install(Vue)

        Vue.component('dynamic-web-request-offer-radio', () => import('./Component.vue'))
    }
}