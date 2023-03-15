<script>
    import SmallTextContent from '../../../../text-contents-vue-components/src/SmallTextContent/Component.vue'

    export default {
        mixins: [
            SmallTextContent
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return{
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