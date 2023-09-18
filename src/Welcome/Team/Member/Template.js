export default {
    "type": "dynamic-web-team-member",
    "data": {
        "image_url": "++image_url",
        "image_alt": "...",
        "title_section": {
            "type": "dynamic-web-small-text-content",
            "data": {
                "title": "++name",
                "content": "++title"
            }
        },
        "contact_icons_section": {
            "type": "wertically-icon-links",
            "data": {
                "icon_sections": {
                    "type": "dynamic-web-button-icon-link",
                    "array_data": "icons",
                    "data": {
                        "url": "++icons.url",
                        "icon_class": "++icons.class"
                    }
                }
            }
        }
    }
}