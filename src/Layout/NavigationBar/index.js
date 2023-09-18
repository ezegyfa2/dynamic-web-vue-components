export default {
    install(Vue) {
        window.templates.dynamic_web_navigation_bar = require('./Template').default
        require('./NavigationBar').default.install(Vue)
        require('./Links').default.install(Vue)
    }
}