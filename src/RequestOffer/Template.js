export default {
    template_type_name: 'dynamic_web_layout',
    params: {
        current_language: '++current_language',
        content_sections: [
            {
                type: 'dynamic-web-request-offer-form',
                data: {
                    id: 'request_offer',
                    url: '-++form_url',
                    title_section: {
                        type: 'dynamic-web-request-offer-text-content',
                        data: {
                            title: '--requestOffer.title',
                            content: '--requestOffer.subtitle',
                        },
                    },
                    form_item_sections: '++form_item_sections',
                    client_form_item_sections: '++client_form_item_sections',
                    presentation_website_form_item_sections: '++presentation_website_form_item_sections',
                    webshop_form_item_sections: '++webshop_form_item_sections',
                    sum_price_label: '--requestOffer.sum_price.label',
                    button_title: '--requestOffer.button_title',
                    next_button_title: '--requestOffer.next_button_title',
                    back_button_title: '--requestOffer.back_button_title'
                },
            },
        ],
    },
};
