<script>
    import Template from '../../../helper-vue-components/src/Template/Component.vue'

    export default {
        mixins: [
            Template
        ],
        data() {
            return {
                mainTemplatePath: 'welcome',
                templates: {
                    welcome: require('./welcome').default,
                    contactUs: require('./contactUs').default,
                    footer: require('./footer').default,
                    header: require('./header').default,
                    navbar: require('./navbar').default,
                    offers: require('./offers').default,
                    services: require('./services').default
                }
            }
        }
    }
</script>
