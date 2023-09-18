export default {
    install(Vue) {
        window.templates.dynamic_web_how_we_do = require('./Template').default
        require('./HowWeDo').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContent').default.install(Vue)
        require('./Timeline').default.install(Vue)
        require('helper-vue-components/RightContent').default.install(Vue)
    }
}