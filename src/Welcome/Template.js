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
                            "title": "--offers.basic.title",
                            "content": "--offers.basic.content",
                            "parts": [
                                "--offers.basic.parts.responsive_layouts",
                                "--offers.basic.parts.modern_design",
                                "--offers.basic.parts.user_friendly",
                                "--offers.basic.parts.admin_panel",
                                "--offers.basic.parts.product_list",
                                "--offers.basic.parts.seo_optimizing"
                            ]
                        },
                        {
                            "title": "--offers.normal.title",
                            "content": "--offers.normal.content",
                            "parts": [
                                "--offers.normal.parts.basic_parts",
                                "--offers.normal.parts.many_product",
                                "--offers.normal.parts.product_categories",
                                "--offers.normal.parts.product_filters",
                                "--offers.normal.parts.users"
                            ]
                        },
                        {
                            "title": "--offers.premium.title",
                            "content": "--offers.premium.content",
                            "parts": [
                                "--offers.premium.parts.normal_parts",
                                "--offers.premium.parts.marketing",
                                "--offers.premium.parts.optmizing",
                                "--offers.premium.parts.custom_design",
                                "--offers.premium.parts.reports"
                            ]
                        }
                    ],
                    "button_title": "--offers.button_title"
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
            },
        ]
    }
}