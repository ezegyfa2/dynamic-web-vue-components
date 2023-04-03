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
        window.templates.dynamic_web_articles = require('./Welcome/articles').default
        window.templates.dynamic_web_team = require('./Welcome/team').default
        window.templates.dynamic_web_team_member = require('./Welcome/teamMember').default
        window.templates.dynamic_web_how_we_do = require('./Welcome/howWeDo').default
        
        window.templates.dynamic_web_request_offer = require('./RequestOffer/requestOffer').default

        window.templates.dynamic_web_thank_you = require('./ThankYou/thankYou').default
    }
}