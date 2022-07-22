<script>
    import MediumTextContent from '../../../../text-contents-vue-components/src/MediumTextContent.vue'

    export default {
        mixins: [
            MediumTextContent
        ],
        data() {
            return {
                addedClasses: {
                    '.title': 'text-uppercase',
                    '.content': 'text-muted'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>
