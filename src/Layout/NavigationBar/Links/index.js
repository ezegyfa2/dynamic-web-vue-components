export default {
    install(Vue) {
        require('./ButtonNavigationLink').default.install(Vue)
        require('./DropdownNavigationLink').default.install(Vue)
        require('./NavigationLink').default.install(Vue)
    }
}