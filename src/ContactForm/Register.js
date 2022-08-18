export default {
    install(Vue) {
        let prefix = 'dynamic-web-contact'
		Vue.component(prefix + '-form', require('./Form/Component.vue').default)
		Vue.component(prefix + '-checkbox-input', require('./FormItems/Inputs/CheckBox/Component.vue').default)
		Vue.component(prefix + '-number-input', require('./FormItems/Inputs/Number/Component.vue').default)
		Vue.component(prefix + '-text-input', require('./FormItems/Inputs/Text/Component.vue').default)
		Vue.component(prefix + '-select', require('./FormItems/Select/Component.vue').default)
		Vue.component(prefix + '-textarea', require('./FormItems/TextArea/Component.vue').default)
    }
}