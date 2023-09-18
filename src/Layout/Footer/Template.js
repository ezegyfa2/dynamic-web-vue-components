export default {
    "type": "dynamic-web-footer",
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
