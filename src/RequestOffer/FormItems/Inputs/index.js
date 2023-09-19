export default {
    install(Vue) {
		require('./CheckBox').default.install(Vue)
		require('./CheckBoxWithLink').default.install(Vue)
		require('./CheckBoxWithTextContent').default.install(Vue)
		require('./Email').default.install(Vue)
		require('./LockedCheckBoxWithTextContent').default.install(Vue)
		require('./Number').default.install(Vue)
		require('./Phone').default.install(Vue)
		require('./Text').default.install(Vue)
    }
}