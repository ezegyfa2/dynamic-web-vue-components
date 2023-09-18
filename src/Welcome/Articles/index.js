export default {
    install(Vue) {
        window.templates.dynamic_web_articles = require('./Template').default
        require('dynamic-web-vue-components/Layout').default.install(Vue)
        require('./ArticleSmallTextContent').default.install(Vue)
        require('./Description').default.install(Vue)
        require('description-vue-components/Container').default.install(Vue)
    }
}