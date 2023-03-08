export default {
    "template_type_name": "dynamic_web_layout",
    "params": {
        "current_language": "++current_language",
        "header_section": {
            "template_type_name": "dynamic_web_header",
            "params": {
                "title": "--layout.header.title",
                "content": "--layout.header.content",
                "button": {
                    "title": "--layout.header.button.title",
                    "url": "#offers"
                }
            }
        },
        "content_sections": [
            {
                "template_type_name": "dynamic_web_offers",
                "params": {
                    "offers": [
                        {
                            "title": "--welcome.offers.basic.title",
                            "content": "--welcome.offers.basic.content",
                            "parts": [
                                "--welcome.offers.basic.parts.responsive_layouts",
                                "--welcome.offers.basic.parts.modern_design",
                                "--welcome.offers.basic.parts.user_friendly",
                                "--welcome.offers.basic.parts.admin_panel",
                                "--welcome.offers.basic.parts.product_list",
                                "--welcome.offers.basic.parts.seo_optimizing"
                            ]
                        },
                        {
                            "title": "--welcome.offers.normal.title",
                            "content": "--welcome.offers.normal.content",
                            "parts": [
                                "--welcome.offers.normal.parts.basic_parts",
                                "--welcome.offers.normal.parts.many_product",
                                "--welcome.offers.normal.parts.product_categories",
                                "--welcome.offers.normal.parts.product_filters",
                                "--welcome.offers.normal.parts.users"
                            ]
                        },
                        {
                            "title": "--welcome.offers.premium.title",
                            "content": "--welcome.offers.premium.content",
                            "parts": [
                                "--welcome.offers.premium.parts.normal_parts",
                                "--welcome.offers.premium.parts.marketing",
                                "--welcome.offers.premium.parts.optmizing",
                                "--welcome.offers.premium.parts.custom_design",
                                "--welcome.offers.premium.parts.reports"
                            ]
                        }
                    ],
                    "button_title": "--welcome.offers.button_title"
                }
            },
            {
                "template_type_name": "dynamic_web_services",
                "params": {
                    "title": "--welcome.services.title",
                    "subtitle": "--welcome.services.subtitle",
                    "texts": [
                        {
                            "icon_class": "fa-solid fa-globe",
                            "title": "--welcome.services.site_building.title",
                            "subtitle": "--welcome.services.site_building.subtitle"
                        },
                        {
                            "icon_class": "fa-solid fa-bullhorn",
                            "title": "--welcome.services.marketing.title",
                            "subtitle": "--welcome.services.marketing.subtitle"
                        },
                        {
                            "icon_class": "fas fa-chart-line",
                            "title": "--welcome.services.optimization.title",
                            "subtitle": "--welcome.services.optimization.subtitle"
                        }
                    ]
                }
            }
        ]
    }
}
