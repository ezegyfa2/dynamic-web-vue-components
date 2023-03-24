export default {
    install(Vue) {
        require('js-helper-methods')
        require('./Templates/templateRegister.js').default.install()
        
        Vue.component('dynamic-component', require('../../helper-vue-components/src/DynamicComponent/Component.vue').default)
        Vue.component('dynamic-template', require('../../helper-vue-components/src/Template/Component.vue').default)
        Vue.component('landing-page', require('../../helper-vue-components/src/LandingPage/Component.vue').default)
        Vue.component('dynamic-web-navigation-bar', require('../../dynamic-web-vue-components/src/NavigationBar/NavigationBar/Component.vue').default)
        Vue.component('dynamic-web-navigation-link', require('../../dynamic-web-vue-components/src/NavigationBar/Links/NavigationLink/Component.vue').default)
        Vue.component('dynamic-web-dropdown-navigation-link', require('../../dynamic-web-vue-components/src/NavigationBar/Links/DropdownNavigationLink/NavigationLink/Component.vue').default)
        Vue.component('dynamic-web-link-dropdown-item', require('../../dynamic-web-vue-components/src/NavigationBar/Links/DropdownNavigationLink/Dropdowns/LinkItem/Component.vue').default)
        Vue.component('dynamic-web-list-dropdown', require('../../dynamic-web-vue-components/src/NavigationBar/Links/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue').default)
        Vue.component('dynamic-web-footer', require('../../dynamic-web-vue-components/src/Footer/Component.vue').default)
        Vue.component('wertically-icon-links', require('../../helper-vue-components/src/IconLinks/WerticallyIconLinks/Component.vue').default)
        Vue.component('dynamic-web-button-icon-link', require('../../dynamic-web-vue-components/src/ButtonIconLink/Component.vue').default)
        Vue.component('dynamic-web-dark-link', require('../../dynamic-web-vue-components/src/DarkLink/Component.vue').default)
        Vue.component('dynamic-web-success-session-message', require('../../dynamic-web-vue-components/src/SessionMessages/SuccessMessage/Component.vue').default)
        
        require('./ContactForm/Register.js').default.install(Vue)

        Vue.component('dynamic-web-contact-form', require('../../dynamic-web-vue-components/src/ContactForm/Form/Component.vue').default)
        Vue.component('dynamic-web-white-medium-text-content', require('../../dynamic-web-vue-components/src/TextContents/WhiteMediumTextContent/Component.vue').default)
        Vue.component('button-icon-link2', require('../../helper-vue-components/src/IconLinks/ButtonIconLink2/Component.vue').default)
        Vue.component('vue-link', require('../../helper-vue-components/src/Link/Component.vue').default)
        Vue.component('csrf-input', require('../../helper-vue-components/src/CsrfInput/Component.vue').default)
        Vue.component('form-item-with-validation-errors', require('../../helper-vue-components/src/Form/FormItemsWithoutLabel/FormItemWithValidationErrors/Component.vue').default)
    }
}
