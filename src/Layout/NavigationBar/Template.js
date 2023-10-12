export default {
    "type": "dynamic-web-navigation-bar",
    "data": {
        "title": "DYNAMIC-WEB",
        "title_url": "/",
        "link_sections": [
            {
                "type": "dynamic-web-navigation-link",
                "data": {
                    "url": "/#services",
                    "content": "--layout.navbar.services"
                }
            },
            {
                "type": "dynamic-web-navigation-link",
                "data": {
                    "url": "/#how_we_do",
                    "content": "--layout.navbar.how_we_do"
                }
            },
            {
                "type": "dynamic-web-navigation-link",
                "data": {
                    "url": "/#our_team",
                    "content": "--layout.navbar.our_team"
                }
            },
            {
                "type": "dynamic-web-navigation-link",
                "data": {
                    "url": "/#our_works",
                    "content": "--layout.navbar.our_works"
                }
            },
            {
                "type": "dynamic-web-button-navigation-link",
                "data": {
                    "url": ""#contact_us"",
                    "content": "--layout.navbar.request_offer"
                }
            },
            {
                "type": "dynamic-web-dropdown-navigation-link",
                "data": {
                    "badge_content": "-++current_language",
                    "dropdown_section": {
                        "type": "dynamic-web-list-dropdown",
                        "data": {
                            "dropdown_item_sections": {
                                "type": "dynamic-web-link-dropdown-item",
                                "array_data": "languages",
                                "data": {
                                    "url": "++languages.url",
                                    "content": "++languages.name"
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
}
