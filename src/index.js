export default {
    install(Vue) {
        window.facebookAccessToken = 'EAAKgXuhD0hABACmD7m1QuXOpVlvD3UgaZCD6PCBxZAZClPQlKBPir9fHgmCQP5W16fOMU8CkzhjxCrFI80iF8KVLX8ziSEjMF0uJNfWZCjLgiIqZCmawtjiRWzSrO7258ZBuIB9FZBXfWGvLnbWpMwfsyxppbbZCUEZC0X4opbp8COfLkaX0IZCAIr1WfFejRPwZBUZD'
        window.facebookPixelId = '740173934391972'
        window.facebookTestEventCode = 'TEST6553'

        require('js-helper-methods/index');
        require('helper-vue-components/index').default.install(Vue);
        require('description-vue-components/index').default.install(Vue);
        require('text-contents-vue-components/index').default.install(Vue);
        require('./RequestOfferForm/register.js').default.install(Vue);
        require('./Templates/templateRegister.js').default.install();

        Vue.component('dynamic-web-navigation-bar', () => import('./NavigationBar/NavigationBar/Component.vue'));
        Vue.component('dynamic-web-navigation-link', () => import('./NavigationBar/Links/NavigationLink/Component.vue'));
        Vue.component('dynamic-web-button-navigation-link', () => import('./NavigationBar/Links/ButtonNavigationLink/Component.vue'));
        Vue.component('dynamic-web-dropdown-navigation-link', () => import('./NavigationBar/Links/DropdownNavigationLink/NavigationLink/Component.vue'));
        Vue.component('dynamic-web-list-dropdown', () => import('./NavigationBar/Links/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue'));
        Vue.component('dynamic-web-link-dropdown-item', () => import('./NavigationBar/Links/DropdownNavigationLink/Dropdowns/LinkItem/Component.vue'));

        Vue.component('dynamic-web-header', () => import('./Header/Component.vue'));

        Vue.component('dynamic-web-offer', () => import('./Offer/Offer/Component.vue'));
        Vue.component('dynamic-web-offer-container', () => import('./Offer/Container/Component.vue'));

        Vue.component('dynamic-web-services', () => import('./Services/Component.vue'));

        Vue.component('dynamic-web-request-offer-form', () => import('./RequestOfferForm/Form/Component.vue'));

        Vue.component('dynamic-web-thank-you', () => import('./ThankYou/Component.vue'));

        Vue.component('dynamic-web-success-session-message', () => import('./SessionMessages/SuccessMessage/Component.vue'));

        Vue.component('dynamic-web-footer', () => import('./Footer/Component.vue'));

        Vue.component('dynamic-web-fixed-footer', () => import('./FixedFooter/Component.vue'));

        Vue.component('dynamic-web-upper-line-text-content', () => import('./TextContents/TextContentWithUpperLine/Component.vue'));
        Vue.component('dynamic-web-middle-line-text-content', () => import('./TextContents/TextContentWithMiddleLine/Component.vue'));
        Vue.component('dynamic-web-medium-text-content', () => import('./TextContents/MediumTextContent/Component.vue'));
        Vue.component('dynamic-web-medium-text-content-with-button', () => import('./TextContents/MediumTextContentWithButton/Component.vue'));
        Vue.component('dynamic-web-team-medium-text-content', () => import('./TextContents/TeamMediumTextContent/Component.vue'));
        Vue.component('dynamic-web-white-medium-text-content', () => import('./TextContents/WhiteMediumTextContent/Component.vue'));
        Vue.component('dynamic-web-text-content-with-icon', () => import('./TextContents/TextContentWithIcon/Component.vue'));
        Vue.component('dynamic-web-small-text-content', () => import('./TextContents/SmallTextContent/Component.vue'));
        Vue.component('dynamic-web-request-offer-small-text-content', () => import('./TextContents/RequestOfferSmallTextContent/Component.vue'));
        Vue.component('dynamic-web-articles-small-text-content', () => import('./TextContents/ArticlesSmallTextContent/Component.vue'));
        Vue.component('dynamic-web-dark-link', () => import('./DarkLink/Component.vue'));
        Vue.component('dynamic-web-button-icon-link', () => import('./ButtonIconLink/Component.vue'));
        Vue.component('dynamic-web-description-section', () => import('./Description/Component.vue'));
        Vue.component('dynamic-web-team', () => import('./Team/Team/Component.vue'));
        Vue.component('dynamic-web-team-member', () => import('./Team/Member/Component.vue'));
        Vue.component('dynamic-web-how-we-do', () => import('./HowWeDo/Component.vue'));
        Vue.component('dynamic-web-timeline', () => import('./Timeline/Timeline/Component.vue'));
        Vue.component('dynamic-web-timeline-item', () => import('./Timeline/TimelineItem/Component.vue'));
        Vue.component('dynamic-web-two-title-text-content', () => import('./TextContents/TwoTitleTextContent/Component.vue'));
        Vue.component('dynamic-web-latest-works', () => import('./LatestWorks/Component.vue'));
    },
};
