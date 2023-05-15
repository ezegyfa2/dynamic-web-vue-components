export default {
    "type": "page-with-facebook-events",
    "data": {
        "event_infos": [
            {
                "name": "PageView",
                "id": 1
            }
        ],
        "success_message_sections": {
            "type": "dynamic-web-success-session-message",
            "array_data": "success_messages",
            "data": {
                "content": "++success_messages"
            }
        },
        "navbar_section": {
            "template_type_name": "dynamic_web_navigation_bar",
            "params": {
                "current_language": "++current_language",
                "languages": "-++navbar.languages"
            }
        },
        "content_sections": [
            {
                "type": "dynamic-web-thank-you",
                "data": {
                    "id": "thank_you",
                    "url": "/thank-you",
                    "thank_you_section": {
                        "type": "dynamic-web-medium-text-content",
                        "data": {
                            "title": "--thankYou.title",
                            "content": "--thankYou.subtitle",
                        },
                    }
                },
            },
        ],
        "footer_section": {
            "type": "dynamic-web-fixed-footer",
            "data": {
                "icon_links_section": {
                    "type": "wertically-icon-links",
                    "data": {
                        "icon_sections": [
                            {
                                "type": "dynamic-web-button-icon-link",
                                "data": {
                                    "url": "https://www.facebook.com/profile.php?id=100084068406799",
                                    "icon_class": "fab fa-facebook-f"
                                }
                            },
                            {
                                "type": "dynamic-web-button-icon-link",
                                "data": {
                                    "url": "",
                                    "icon_class": "fa-brands fa-linkedin-in"
                                }
                            }
                        ]
                    }
                },
                "footer_link_sections": [
                    {
                        "type": "dynamic-web-dark-link",
                        "data": {
                            "url": "/privacy_policy",
                            "content": "--layout.footer.privacy_policy",
                            "added_classes": {
                                "root": "me-3"
                            }
                        }
                    }
                ],
                "copyright": {
                    "company_name": "--layout.footer.copyright.company_name",
                    "content": "--layout.footer.copyright.content"
                }
            }
        }
    }
}
