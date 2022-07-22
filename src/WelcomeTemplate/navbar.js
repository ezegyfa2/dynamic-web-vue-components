export default {
    "type": "dynamic-web-navigation-bar",
    "data": {
        "title": "DYNAMIC-WEB",
        "links": [
            {
                "type": "dynamic-web-navigation-link",
                "array_data": "links",
                "merge_to_parent": true,
                "data": {
                    "url": "++links.url",
                    "content": "++links.content"
                }
            },
            {
                "type": "dynamic-web-dropdown-navigation-link",
                "data": {
                    "badge_content": "++current_language",
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
