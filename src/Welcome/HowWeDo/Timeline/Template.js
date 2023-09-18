export default {
    type: 'dynamic-web-timeline',
    data: {
        timeline_item_sections: [
            {
                type: 'dynamic-web-timeline-item',
                data: {
                    image_url: 'images/roadmap/vazlat.jpg',
                    content_sections: [
                        {
                            type: 'dynamic-web-two-title-text-content',
                            data: {
                                title: '--welcome.workflow.sketch.title',
                                content: '--welcome.workflow.sketch.content',
                            },
                        },
                    ],
                },
            },
            {
                type: 'dynamic-web-timeline-item',
                data: {
                    image_url: 'images/roadmap/tervezes.jpg',
                    is_inverted: true,
                    content_sections: [
                        {
                            type: 'dynamic-web-two-title-text-content',
                            data: {
                                title: '--welcome.workflow.design.title',
                                content: '--welcome.workflow.design.content',
                            },
                        },
                    ],
                },
            },
            {
                type: 'dynamic-web-timeline-item',
                data: {
                    image_url: 'images/roadmap/fejlesztes.jpg',
                    content_sections: [
                        {
                            type: 'dynamic-web-two-title-text-content',
                            data: {
                                title: '--welcome.workflow.develop.title',
                                content: '--welcome.workflow.develop.content',
                            },
                        },
                    ],
                },
            },
            {
                type: 'dynamic-web-timeline-item',
                data: {
                    image_url: 'images/roadmap/teszteles.jpg',
                    is_inverted: true,
                    with_line: false,
                    content_sections: [
                        {
                            type: 'dynamic-web-two-title-text-content',
                            data: {
                                title: '--welcome.workflow.test.title',
                                content: '--welcome.workflow.test.content',
                            },
                        },
                    ],
                },
            },
            {
                type: 'dynamic-web-medium-text-content-with-button',
                data: {
                    title: '--welcome.request_offer.title',
                    content: '--welcome.request_offer.content',
                    url: '/request-offer',
                    button_content: '--welcome.request_offer.button_content',
                },
            },
        ],
    },
}
