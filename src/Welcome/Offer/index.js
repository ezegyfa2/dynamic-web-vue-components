export default {
    install(Vue) {
        window.templates.dynamic_web_offers = require('./Template').default
        require('./Container').default.install(Vue)
        require('./Offer').default.install(Vue)
        require('./TextContentWithMiddleLine').default.install(Vue)
    }
}