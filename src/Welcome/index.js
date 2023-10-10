export default {
    install(Vue) {
        window.templates.dynamic_web_welcome = require('./Template').default
        require('./Articles').default.install(Vue)
        require('./Header').default.install(Vue)
        require('./HowWeDo').default.install(Vue)
        require('./LatestWorks').default.install(Vue)
        require('./Offer').default.install(Vue)
        require('./Services').default.install(Vue)
        require('./Team').default.install(Vue)
        require('dynamic-web-vue-components/Layout').default.install(Vue)
    }
}