export default {
    install(Vue) {
        require('helper-vue-components/SessionMessages/MessageBox').default.install(Vue)

        Vue.component('dynamic-web-message-box', () => import('./Component.vue'))
    }
}