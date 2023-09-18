export default {
    install(Vue) {
        window.templates.dynamic_web_header = require('./Template').default
        require('./Header').default.install(Vue)
        require('./TextContentWithUpperLine').default.install(Vue)
        require('helper-vue-components/RightContent').default.install(Vue)
    }
}