<script>
    import TextContentWithIcon from '../../../../text-contents-vue-components/src/TextContentWithIcon/Component.vue'

    export default {
        mixins: [
            TextContentWithIcon
        ],
        data() {
            return {
                addedClasses: {
                    'span': [
                        'fa-stack',
                        'fa-4x'
                    ],
                    '.title': [
                        'h4',
                        'my-3',
                    ],
                    '.content': 'text-muted'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>
