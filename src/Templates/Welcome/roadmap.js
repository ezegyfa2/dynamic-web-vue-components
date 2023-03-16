export default {
    type: 'dynamic-web-roadmap',
    data: {
        title_section: {
            type: 'dynamic-web-medium-text-content',
            data: {
                title: '--welcome.workflow.title',
                content: '--welcome.workflow.subtitle',
            },
        },
        timeline_section: {
            type: 'dynamic-web-timeline',
            data: {
                timeline_item_sections: [
                    {
                        type: 'dynamic-web-timeline-item',
                        data: {
                            image_url: 'images/roadmap/sample1000x1000.jpg',
                            content_sections: [
                                {
                                    type: 'dynamic-web-two-title-text-content',
                                    data: {
                                        title: '--welcome.workflow.sketch.title',
                                        content: '--welcome.workflow.sketch.content',
                                    }
                                }
                            ],
                        },
                    },
                    {
                        type: 'dynamic-web-timeline-item',
                        data: {
                            image_url: 'images/roadmap/sample1000x1000.jpg',
                            is_inverted: true,
                            content_sections: [
                                {
                                    type: 'dynamic-web-two-title-text-content',
                                    data: {
                                        title: '--welcome.workflow.design.title',
                                        content: '--welcome.workflow.design.content',
                                    },
                                }
                            ],
                        },
                    },
                    {
                        type: 'dynamic-web-timeline-item',
                        data: {
                            image_url: 'images/roadmap/sample1000x1000.jpg',
                            content_sections: [
                                {
                                    type: 'dynamic-web-two-title-text-content',
                                    data: {
                                        title: '--welcome.workflow.develop.title',
                                        content: '--welcome.workflow.develop.content',
                                    },
                                }
                            ],
                        },
                    },
                    {
                        type: 'dynamic-web-timeline-item',
                        data: {
                            image_url: 'images/roadmap/sample1000x1000.jpg',
                            is_inverted: true,
                            with_line: false,
                            content_sections: [
                                {
                                    type: 'dynamic-web-two-title-text-content',
                                    data: {
                                        title: '--welcome.workflow.test.title',
                                        content: '--welcome.workflow.test.content',
                                    },
                                }
                            ],
                        },
                    },
                ],
            },
        },
    },
};
