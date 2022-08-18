export default {
	install(Vue) {
		require('js-helper-methods')
		require('helper-vue-components').default.install(Vue)
		require('./ContactForm/register.js').default.install(Vue)

		Vue.component('dynamic-web-welcome-template', require('./WelcomeTemplate/Component.vue').default)

		Vue.component('dynamic-web-navigation-bar', require('./NavigationBar/NavigationBar/Component.vue').default)
		Vue.component('dynamic-web-navigation-link', require('./NavigationBar/Links/NavigationLink/Component.vue').default)
		Vue.component('dynamic-web-dropdown-navigation-link', require('./NavigationBar/Links/DropdownNavigationLink/NavigationLink/Component.vue').default)
		Vue.component('dynamic-web-list-dropdown', require('./NavigationBar/Links/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue').default)
		Vue.component('dynamic-web-link-dropdown-item', require('./NavigationBar/Links/DropdownNavigationLink/Dropdowns/LinkItem/Component.vue').default)

		Vue.component('dynamic-web-header', require('./Header/Component.vue').default)

		Vue.component('dynamic-web-offer', require('./Offer/Offer/Component.vue').default)
		Vue.component('dynamic-web-offer-container', require('./Offer/Container/Component.vue').default)

		Vue.component('dynamic-web-services', require('./Services/Component.vue').default)

		Vue.component('dynamic-web-contact-form', require('./ContactForm/Form/Component.vue').default)
		Vue.component('dynamic-web-success-session-message', require('./SessionMessage/Component.vue').default)

		Vue.component('dynamic-web-footer', require('./Footer/Component.vue').default)

		Vue.component('dynamic-web-upper-line-text-content', require('./TextContents/TextContentWithUpperLine/Component.vue').default)
		Vue.component('dynamic-web-middle-line-text-content', require('./TextContents/TextContentWithMiddleLine/Component.vue').default)
		Vue.component('dynamic-web-medium-text-content', require('./TextContents/MediumTextContent/Component.vue').default)
		Vue.component('dynamic-web-white-medium-text-content', require('./TextContents/WhiteMediumTextContent/Component.vue').default)
		Vue.component('dynamic-web-text-content-with-icon', require('./TextContents/TextContentWithIcon/Component.vue').default)
	}
};