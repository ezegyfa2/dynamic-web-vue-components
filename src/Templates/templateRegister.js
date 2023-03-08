export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.dynamic_web_layout = require('./Layout/layout').default
        window.templates.dynamic_web_navigation_bar = require('./Layout/navigationBar').default
        window.templates.dynamic_web_footer = require('./Layout/footer').default

        window.templates.dynamic_web_welcome = require('./Welcome/welcome').default
        window.templates.dynamic_web_header = require('./Welcome/header').default
        window.templates.dynamic_web_offers = require('./Welcome/offers').default
        window.templates.dynamic_web_services = require('./Welcome/services').default
        
        window.templates.dynamic_web_contact_us = require('./ContactUs/contactUs').default
    }
}