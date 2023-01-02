export default {
    "type": "dynamic-web-footer",
    "data": {
        "icon_links_section": {
            "type": "wertically-icon-links",
            "data": {
                "icon_sections": {
                    "type": "dynamic-web-button-icon-link",
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
                "type": "dynamic-web-dark-link",
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
