export default {
    "template_type_name": "dynamic_web_layout",
    "params": {
        "current_language": "++current_language",
        "content_sections": [
            {
                "type": "dynamic-web-contact-form",
                "data": {
                    "id": "contact_us",
                    "url": "/contact-us",
                    "title_section": {
                        "type": "dynamic-web-white-medium-text-content",
                        "data": {
                            "title": "--contactUs.title",
                            "content": "--contactUs.subtitle"
                        }
                    },
                    "form_item_sections": "++form_item_sections",
                    "button_title": "--contactUs.button_title",
                    "next_button_title": "--contactUs.next_button_title",
                    "back_button_title": "--contactUs.back_button_title",
                }
            }
        ]
    }
}
