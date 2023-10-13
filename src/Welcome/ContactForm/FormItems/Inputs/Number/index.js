export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Number').default.install(Vue)

        Vue.component('dynamic-web-contact-number-input', () => import('./Component.vue'))
    }
}