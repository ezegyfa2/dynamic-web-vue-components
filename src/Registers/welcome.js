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
        

        Vue.component('dynamic-web-header', require('../../dynamic-web-vue-components/src/Header/Component.vue').default)
        Vue.component('right-content', require('../../helper-vue-components/src/RightContent/Component.vue').default)
        Vue.component('dynamic-web-upper-line-text-content', require('../../dynamic-web-vue-components/src/TextContents/TextContentWithUpperLine/Component.vue').default)
        Vue.component('dynamic-web-offer-container', require('../../dynamic-web-vue-components/src/Offer/Container/Component.vue').default)
        Vue.component('dynamic-web-offer', require('../../dynamic-web-vue-components/src/Offer/Offer/Component.vue').default)
        Vue.component('dynamic-web-middle-line-text-content', require('../../dynamic-web-vue-components/src/TextContents/TextContentWithMiddleLine/Component.vue').default)
        Vue.component('dynamic-web-services', require('../../dynamic-web-vue-components/src/Services/Component.vue').default)
        Vue.component('dynamic-web-medium-text-content', require('../../dynamic-web-vue-components/src/TextContents/MediumTextContent/Component.vue').default)
        Vue.component('dynamic-web-text-content-with-icon', require('../../dynamic-web-vue-components/src/TextContents/TextContentWithIcon/Component.vue').default)
        Vue.component('description-section-container', require('../../description-vue-components/src/Container/Component.vue').default)
        Vue.component('white-description-section', require('../../description-vue-components/src/WhiteDescription/Component.vue').default)
        Vue.component('small-black50-text-content', require('../../text-contents-vue-components/src/ColoredTextContents/SmallBlack50TextContent.vue').default)
        Vue.component('button-icon-link2', require('../../helper-vue-components/src/IconLinks/ButtonIconLink2/Component.vue').default)
        Vue.component('vue-link', require('../../helper-vue-components/src/Link/Component.vue').default)
        Vue.component('dynamic-web-description-section', require('../../dynamic-web-vue-components/src/Description/Component.vue').default)
        Vue.component('dynamic-web-team', require('./Team/Team/Component.vue').default)
        Vue.component('dynamic-web-team-member', require('./Team/Member/Component.vue').default)
        Vue.component('dynamic-web-team-medium-text-content', require('./TextContents/TeamMediumTextContent/Component.vue').default)
        Vue.component('dynamic-web-how-we-do', require('./HowWeDo/Component.vue').default)
        Vue.component('dynamic-web-timeline', require('./Timeline/Timeline/Component.vue').default)
        Vue.component('dynamic-web-timeline-item', require('./Timeline/TimelineItem/Component.vue').default)
        Vue.component('dynamic-web-latest-works', require('./LatestWorks/Component.vue').default)
        Vue.component('dynamic-web-request-offer-small-text-content', require('./TextContents/RequestOfferSmallTextContent/Component.vue').default)
        Vue.component('dynamic-web-articles-small-text-content', require('./TextContents/ArticlesSmallTextContent/Component.vue').default)
        Vue.component('dynamic-web-two-title-text-content', require('./TextContents/TwoTitleTextContent/Component.vue').default)
    }
}
