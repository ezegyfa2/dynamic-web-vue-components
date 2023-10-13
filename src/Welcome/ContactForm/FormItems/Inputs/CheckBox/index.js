export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)

        Vue.component('dynamic-web-contact-checkbox-input', () => import('./Component.vue'))
    }
}