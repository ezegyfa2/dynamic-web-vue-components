export default {
    install(Vue) {
        window.templates.dynamic_web_layout = require('./Template').default
        require('./NavigationBar').default.install(Vue)
        require('./Footer').default.install(Vue)
        require('./SessionMessages/SuccessMessage').default.install(Vue)
        require('helper-vue-components/Pages/Page').default.install(Vue)
    }
}