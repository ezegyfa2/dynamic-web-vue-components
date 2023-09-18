export default {
    install(Vue) {
        require('./Dropdowns').default.install(Vue)
        require('./NavigationLink').default.install(Vue)
    }
}