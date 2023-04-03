export default {
    template_type_name: 'dynamic_web_layout',
    params: {
        header_section: {},
        current_language: '++current_language',
        content_sections: [
            {
                template_type_name: 'dynamic_web_articles',
            },
            {
                type: 'dynamic-web-request-offer-text-content',
                data: {
                    title: '--requestOffer.title',
                    content: '--requestOffer.subtitle',
                }
            }
        ]
    }
}
