export default {
    install(Vue) {
        window.templates.dynamic_web_team = require('./Template').default
        require('dynamic-web-vue-components/GlobalComponents/MediumTextContent').default.install(Vue)
        require('./Member').default.install(Vue)
        require('./Team').default.install(Vue)
        require('./TeamMediumTextContent').default.install(Vue)
    }
}