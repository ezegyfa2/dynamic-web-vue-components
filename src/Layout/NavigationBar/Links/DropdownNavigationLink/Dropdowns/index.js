export default {
    install(Vue) {
        require('./LinkItem').default.install(Vue)
        require('./ListDropdown').default.install(Vue)
    }
}