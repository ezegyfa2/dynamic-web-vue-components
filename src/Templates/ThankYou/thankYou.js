export default {
    template_type_name: 'dynamic_web_layout',
    params: {
        current_language: '++current_language',
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
                    },
                    thank_you_content: '--thankYou.content',
                    email: '--thankYou.email',
                    email_address: '--thankYou.email_address',
                },
            },
        ]
    }
}
