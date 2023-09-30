export default {
    install(Vue) {
        window.templates.dynamic_web_request_offer = require('./Template').default
        require('./Form').default.install(Vue)
        require('./FormItems').default.install(Vue)
        require('./Pagination').default.install(Vue)
        require('./TextContent').default.install(Vue)
        require('dynamic-web-vue-components/Layout').default.install(Vue)
    }
}