export default {
    "type": "page",
    "data": {
        "success_message_sections": {
            "type": "dynamic-web-success-session-message",
            "array_data": "success_messages",
            "data": {
                "content": "++success_messages"
            }
        },
        "navigation_bar_section": {
            "template_type_name": "dynamic_web_navigation_bar"
        },
        "content_sections": "++content_sections",
        "footer_section": {
            "template_type_name": "dynamic_web_footer"
        }
    }
}
