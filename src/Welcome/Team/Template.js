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
                            url: 'https://twitter.com/DarvasIstvan1',
                            class: 'fab fa-twitter',
                        },
                        {
                            url: 'https://www.facebook.com/ismeros.vaok/',
                            class: 'fab fa-facebook-f',
                        },
                        {
                            url: 'https://www.linkedin.com/in/darvas-istvan-2a921a26b/',
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
                            url: 'https://twitter.com/JBagota',
                            class: 'fab fa-twitter',
                        },
                        {
                            url: 'https://www.facebook.com/jbagota',
                            class: 'fab fa-facebook-f',
                        },
                        {
                            url: 'https://www.linkedin.com/in/jbagota/',
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
                    image_url: 'images/Articles/benedek_csaba.jpg',
                    icons: [
                        {
                            url: 'https://twitter.com/CsabaBenedek27',
                            class: 'fab fa-twitter',
                        },
                        {
                            url: 'https://www.facebook.com/csaba.benedek.106',
                            class: 'fab fa-facebook-f',
                        },
                        {
                            url: 'https://www.linkedin.com/in/csaba-benedek-87522b26b',
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
                            url: 'https://twitter.com/kSzili03',
                            class: 'fab fa-twitter',
                        },
                        {
                            url: 'https://www.facebook.com/szilard.kovacs.754918',
                            class: 'fab fa-facebook-f',
                        },
                        {
                            url: 'https://www.linkedin.com/in/szil%C3%A1rd-kov%C3%A1cs-71615326b/',
                            class: 'fab fa-linkedin-in',
                        },
                    ],
                },
            },
        ],
    },
};
