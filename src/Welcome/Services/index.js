export default {
    install(Vue) {
        window.templates.dynamic_web_services = require('./Template').default
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContent').default.install(Vue)
        require('./TextContentWithIcon').default.install(Vue)
        require('./Services').default.install(Vue)
    }
}