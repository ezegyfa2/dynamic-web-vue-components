export default {
    install(Vue) {
        require('helper-vue-components/Team/Member').default.install(Vue)
        
        Vue.component('dynamic-web-team-member', () => import('./Component.vue'))
    }
}