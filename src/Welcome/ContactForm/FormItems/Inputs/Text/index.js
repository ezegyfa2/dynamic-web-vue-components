export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Text').default.install(Vue)

        Vue.component('dynamic-web-contact-text-input', () => import('./Component.vue'))
    }
}