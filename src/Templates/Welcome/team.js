export default {
  type: 'dynamic-web-team',
  data: {
    title_section: {
      type: 'dynamic-web-team-medium-text-content',
      data: {
        title: '--welcome.team.title',
      },
    },
    member_sections: [
      {
        template_type_name: 'dynamic_web_team_member',
        params: {
          name: 'Darvas Istvan',
          title: '--welcome.team.members.darvas_istvan',
          image_url: 'images/Articles/darvas_istvan.jpg',
          icons: [
            {
              url: '',
              class: 'fab fa-twitter',
            },
            {
              url: '',
              class: 'fab fa-facebook-f',
            },
            {
              url: '',
              class: 'fab fa-linkedin-in',
            },
          ],
        },
      },
      {
        template_type_name: 'dynamic_web_team_member',
        params: {
          name: 'Bagota Jozsef',
          title: '--welcome.team.members.bagota_jozsef',
          image_url: 'images/Articles/bagota_jozsef.jpg',
          icons: [
            {
              url: '',
              class: 'fab fa-twitter',
            },
            {
              url: '',
              class: 'fab fa-facebook-f',
            },
            {
              url: '',
              class: 'fab fa-linkedin-in',
            },
          ],
        },
      },
      {
        template_type_name: 'dynamic_web_team_member',
        params: {
          name: 'Benedek Csaba',
          title: '--welcome.team.members.benedek_csaba',
          image_url: 'images/Articles/sample1000x1000.jpg',
          icons: [
            {
              url: '',
              class: 'fab fa-twitter',
            },
            {
              url: '',
              class: 'fab fa-facebook-f',
            },
            {
              url: '',
              class: 'fab fa-linkedin-in',
            },
          ],
        },
      },
      {
        template_type_name: 'dynamic_web_team_member',
        params: {
          name: 'Kovacs Szilard',
          title: '--welcome.team.members.kovacs_szilard',
          image_url: 'images/Articles/kovacs_szilard.jpg',
          icons: [
            {
              url: '',
              class: 'fab fa-twitter',
            },
            {
              url: '',
              class: 'fab fa-facebook-f',
            },
            {
              url: '',
              class: 'fab fa-linkedin-in',
            },
          ],
        },
      },
    ],
  },
};
