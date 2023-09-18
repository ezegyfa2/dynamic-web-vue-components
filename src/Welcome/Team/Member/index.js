export default {
    install(Vue) {
        window.templates.dynamic_web_team_member = require('./Template').default
        require('./Member').default.install(Vue)
        require('./SmallTextContent').default.install(Vue)
        require('dynamic-web-vue-components/GlobalComponents/ButtonIconLink').default.install(Vue)
        require('helper-vue-components/IconLinks/WerticallyIconLinks').default.install(Vue)
    }
}