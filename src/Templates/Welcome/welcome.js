export default {
    template_type_name: 'dynamic_web_layout',
    params: {
        success_messages: '++success_messages',
        current_language: '++current_language',
        header_section: {
            template_type_name: 'dynamic_web_header',
            params: {
                title: '--layout.header.title',
                content: '--layout.header.content',
                button: {
                    title: '--layout.header.button.title',
                    url: '#offers',
                },
            },
        },
        content_sections: [
            {
                template_type_name: 'dynamic_web_services',
                params: {
                    title: '--welcome.services.title',
                    subtitle: '--welcome.services.subtitle',
                    texts: [
                        {
                            icon_class: 'fa-solid fa-globe',
                            title: '--welcome.services.site_building.title',
                            subtitle: '--welcome.services.site_building.subtitle',
                        },
                        {
                            icon_class: 'fa-solid fa-solar-panel',
                            title: '--welcome.services.admin.title',
                            subtitle: '--welcome.services.admin.subtitle',
                        },
                        {
                            icon_class: 'fa-solid fa-wrench',
                            title: '--welcome.services.maintance.title',
                            subtitle: '--welcome.services.maintance.subtitle',
                        },
                    ],
                },
            },
            {
                template_type_name: 'dynamic_web_articles',
            },
            {
                template_type_name: 'dynamic_web_how_we_do',
            },
            {
                template_type_name: 'dynamic_web_team',
            },
            {
                template_type_name: 'dynamic_web_our_works',
            },
        ],
    },
};
