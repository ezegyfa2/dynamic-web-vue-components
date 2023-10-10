export default {
    install(Vue) {
        require('text-contents-vue-components/TextContentWithIcon').default.install(Vue)
        
        Vue.component('dynamic-web-text-content-with-icon', () => import('./Component.vue'))
    }
}