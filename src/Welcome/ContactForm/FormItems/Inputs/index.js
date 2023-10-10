export default {
    install(Vue) {
		require('./CheckBox').default.install(Vue)
		require('./Number').default.install(Vue)
		require('./Text').default.install(Vue)
    }
}
