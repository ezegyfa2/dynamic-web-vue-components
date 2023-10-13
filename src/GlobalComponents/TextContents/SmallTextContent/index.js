export default {
    install(Vue) {
        require('text-contents-vue-components/MediumTextContent').default.install(Vue)

        Vue.component('la75-small-text-content', () => import('./Component.vue'))
    }
}