export default {
    install(Vue) {
        let prefix = 'dynamic-web-contact'
		registerVueComponent(prefix + '-form', require('./Form/Component.vue').default, Vue)
		registerVueComponent(prefix + '-checkbox-input', require('./FormItems/Inputs/CheckBox/Component.vue').default, Vue)
		registerVueComponent(prefix + '-number-input', require('./FormItems/Inputs/Number/Component.vue').default, Vue)
		registerVueComponent(prefix + '-text-input', require('./FormItems/Inputs/Text/Component.vue').default, Vue)
		registerVueComponent(prefix + '-email-input', require('./FormItems/Inputs/Email/Component.vue').default, Vue)
		registerVueComponent(prefix + '-phone-input', require('./FormItems/Inputs/Phone/Component.vue').default, Vue)
		registerVueComponent(prefix + '-select', require('./FormItems/Select/Component.vue').default, Vue)
		registerVueComponent(prefix + '-textarea', require('./FormItems/TextArea/Component.vue').default, Vue)
		registerVueComponent(prefix + '-text-content', require('./TextContent/Component.vue').default, Vue)
    }
}