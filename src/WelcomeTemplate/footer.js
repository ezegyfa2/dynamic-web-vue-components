export default {
    "type": "dynamic-web-footer",
    "data": {
        "icon_links_section": {
            "type": "wertically-icon-links",
            "data": {
                "icon_sections": {
                    "type": "button-icon-link2",
                    "array_data": "icons",
                    "data": {
                        "url": "++icons.url",
                        "icon_class": "++icons.icon_class"
                    }
                }
            }
        },
        "footer_link_sections": [
            {
                "type": "dark-link",
                "data": {
                    "url": "/privacy_policy",
                    "content": "++privacy_policy.content",
                    "added_classes": {
                        "root": "me-3"
                    }
                }
            }
        ],
        "copyright": "++copyright"
    }
}
