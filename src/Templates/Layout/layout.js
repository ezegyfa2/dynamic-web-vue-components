export default {
    "type": "page-with-facebook-events",
    "data": {
        "event_infos": "++event_infos",
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
                "links": [
                    {
                        "url": "/#services",
                        "content": "--layout.navbar.services"
                    },
                    {
                        "url": "/#how_we_do",
                        "content": "--layout.navbar.how_we_do"
                    },
                    {
                        "url": "/#our_team",
                        "content": "--layout.navbar.our_team"
                    },
                    {
                        "url": "/#our_works",
                        "content": "--layout.navbar.our_works"
                    },
                    {
                        "url": "/request-offer",
                        "content": "--layout.navbar.request_offer"
                    },
                ],
                "languages": "-++navbar.languages"
            }
        },
        "content_sections": "++content_sections",
        "footer_section": {
            "template_type_name": "dynamic_web_footer",
            "params": {
                "icons": [
                    {
                        "url": "https://www.facebook.com/profile.php?id=100084068406799",
                        "icon_class": "fab fa-facebook-f"
                    },
                    {
                        "url": "",
                        "icon_class": "fa-brands fa-linkedin-in"
                    }
                ],
                "privacy_policy": {
                    "url": "",
                    "content": "--layout.footer.privacy_policy"
                },
                "copyright": {
                    "company_name": "--layout.footer.copyright.company_name",
                    "content": "--layout.footer.copyright.content"
                }
            }
        }
    }
}
