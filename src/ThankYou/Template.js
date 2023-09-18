export default {
    template_type_name: 'dynamic_web_layout',
    params: {
        content_sections: [
            {
                type: 'dynamic-web-thank-you',
                data: {
                    id: 'thank_you',
                    url: '/thank-you',
                    thank_you_section: {
                        type: 'dynamic-web-medium-text-content',
                        data: {
                            title: '--thankYou.title',
                            content: '--thankYou.subtitle',
                        },
                    }
                },
            },
        ]
    }
}
