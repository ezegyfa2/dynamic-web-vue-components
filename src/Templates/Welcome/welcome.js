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
        template_type_name: 'dynamic_web_roadmap',
      },
      {
        template_type_name: 'dynamic_web_team',
      },
      {
        type: 'dynamic-web-latest-works',
        data: {
          title_section: {
            type: 'dynamic-web-medium-text-content',
            data: {
              title: '--welcome.our_works.title',
            },
          },
          images: [
            {
              image_alt: '',
              image_url:
                'images/latestworks/beautiful-vegan-restaurant-landing-page-template_1361-898.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/beauty-salon-booking-app_52683-39803.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/blogger-email-template-collection_23-2148743274.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/ecommerce-email-template_23-2148737349.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/fashion-shopping-app-pack-template_23-2148651171.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/fitness-email-template_23-2148743277.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/furniture-shopping-app-concept_23-2148662516.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/furniture-shopping-app-interface_23-2148659898.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/gradient-blog-template-design_23-2149648665.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/gradient-e-commerce-app-template_23-2149579024.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/gradient-e-commerce-website-template_23-2149579044.jpg',
            },
            {
              image_alt: '',
              image_url:
                'images/latestworks/gradient-furniture-sale-landing-page-with-photo_23-2148930455.jpg',
            },
          ],
        },
      },
    ],
  },
};
