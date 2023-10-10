export default {
    install(Vue) {
        window.templates.dynamic_web_contact_form = require('./Template').default
        require('./Form').default.install(Vue)
        require('./FormItems').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/TextContents/WhiteMediumTextContent').default.install(Vue)
    }
}