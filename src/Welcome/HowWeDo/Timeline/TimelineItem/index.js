export default {
    install(Vue) {
        require('helper-vue-components/Timeline/TimelineItem').default.install(Vue)

        registerVueComponent(
            'dynamic-web-timeline-item',
            require('./Component.vue').default,
            Vue
        )
    }
}