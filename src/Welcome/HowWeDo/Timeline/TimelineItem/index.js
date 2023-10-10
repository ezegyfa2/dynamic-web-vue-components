export default {
    install(Vue) {
        require('helper-vue-components/Timeline/TimelineItem').default.install(Vue)

        Vue.component('dynamic-web-timeline-item', () => import('./Component.vue'))
    }
}