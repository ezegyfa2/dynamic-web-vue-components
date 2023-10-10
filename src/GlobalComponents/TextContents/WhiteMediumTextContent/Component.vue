<script>
    import MediumTextContent from 'text-contents-vue-components/MediumTextContent/Component.vue'

    export default {
        mixins: [
            MediumTextContent
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.title': 'text-uppercase',
                        '.content': 'text-muted'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>
