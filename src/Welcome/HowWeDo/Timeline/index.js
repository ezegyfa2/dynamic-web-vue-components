export default {
    install(Vue) {
        window.templates.dynamic_web_timeline = require('./Template').default
        require('./Timeline').default.install(Vue)
        require('./TimelineItem').default.install(Vue)
        require('./TwoTitleTextContent').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContentWithButton').default.install(Vue)
    }
}