export default {
    install(Vue) {
        require('helper-vue-components/Team/Team').default.install(Vue)
        
        Vue.component('dynamic-web-team', () => import('./Component.vue'))
    }
}