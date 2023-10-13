export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/TextArea').default.install(Vue)

        Vue.component('dynamic-web-contact-textarea', () => import('./Component.vue'))
    }
}