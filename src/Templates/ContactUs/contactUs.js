export default {
    template_type_name: 'dynamic_web_layout',
    params: {
        header_section: {},
        current_language: '++current_language',
        content_sections: [
            {
                type: 'dynamic-web-contact-form',
                data: {
                    id: 'contact_us',
                    url: '/contact-us',
                    title_section: {
                        type: 'dynamic-web-contact-text-content',
                        data: {
                            title: '--contactUs.title',
                            content: '--contactUs.subtitle',
                        },
                    },
                    form_item_sections: '++form_item_sections',
                    client_form_item_sections: '++client_form_item_sections',
                    presentation_website_form_item_sections: '++presentation_website_form_item_sections',
                    webshop_form_item_sections: '++webshop_form_item_sections',
                    sum_price_label: '--contactUs.sum_price.label',
                    button_title: '--contactUs.button_title',
                    next_button_title: '--contactUs.next_button_title',
                    back_button_title: '--contactUs.back_button_title'
                },
            },
        ],
    },
};
