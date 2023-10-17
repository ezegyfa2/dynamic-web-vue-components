export default {
    "template_type_name": "dynamic_web_layout",
    "params": {
        "content_sections": [
            {
                "template_type_name": "dynamic_web_header"
            },
            {
                "template_type_name": "dynamic_web_services",
                "params": {
                    "texts": [
                        {
                            "icon_class": "fa-solid fa-globe",
                            "title": "--welcome.services.site_building.title",
                            "subtitle": "--welcome.services.site_building.subtitle"
                        },
                        {
                            "icon_class": "fa-solid fa-solar-panel",
                            "title": "--welcome.services.admin.title",
                            "subtitle": "--welcome.services.admin.subtitle"
                        },
                        {
                            "icon_class": "fa-solid fa-wrench",
                            "title": "--welcome.services.maintance.title",
                            "subtitle": "--welcome.services.maintance.subtitle"
                        }
                    ]
                }
            },
            {
                "template_type_name": "dynamic_web_offers",
                "params": {
                    "offers": [
                        {
                            "title": "--welcome.offers.presentation.title",
                            "content": "--welcome.offers.presentation.content",
                            "parts": [
                                "--welcome.offers.presentation.parts.responsive_layouts",
                                "--welcome.offers.presentation.parts.modern_design",
                                "--welcome.offers.presentation.parts.seo_optimization",
                                "--welcome.offers.presentation.parts.admin_panel",
                                "--welcome.offers.presentation.parts.fast_loading",
                                "--welcome.offers.presentation.parts.ssl",
                                "--welcome.offers.presentation.parts.backup",
                            ]
                        },
                        {
                            "title": "--welcome.offers.webshop.title",
                            "content": "--welcome.offers.webshop.content",
                            "parts": [
                                "--welcome.offers.webshop.parts.basic_parts",
                                "--welcome.offers.webshop.parts.card_using",
                                "--welcome.offers.webshop.parts.automatic_invoicing",
                                "--welcome.offers.webshop.parts.admin_page",
                                "--welcome.offers.webshop.parts.customer_reviews",
                                "--welcome.offers.webshop.parts.weekly_reviews",
                            ]
                        },
                        {
                            "title": "--welcome.offers.online_marketplace.title",
                            "content": "--welcome.offers.online_marketplace.content",
                            "parts": [
                                "--welcome.offers.online_marketplace.parts.normal_parts",
                                "--welcome.offers.online_marketplace.parts.user_products",
                                "--welcome.offers.online_marketplace.parts.chat",
                                "--welcome.offers.online_marketplace.parts.supplier_profiles",
                                "--welcome.offers.online_marketplace.parts.promotions"
                            ]
                        }
                    ],
                    "button_title": "--welcome.offers.button_title"
                }
            },
            {
                "template_type_name": "dynamic_web_articles"
            },
            {
                "template_type_name": "dynamic_web_how_we_do"
            },
            {
                "template_type_name": "dynamic_web_team"
            },
            {
                "template_type_name": "dynamic_web_latest_works"
            },
            {
                "template_type_name": "dynamic_web_contact_form"
            }
        ]
    }
}