export default {
    install(Vue) {
        require('text-contents-vue-components/SmallTextContent').default.install(Vue)
        
        Vue.component('dynamic-web-small-text-content', () => import('./Component.vue'))
    }
}