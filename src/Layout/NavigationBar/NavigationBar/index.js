export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/CollapsableNavigationBar').default.install(Vue)

        Vue.component('dynamic-web-navigation-bar', () => import('./Component.vue'))
    }
}