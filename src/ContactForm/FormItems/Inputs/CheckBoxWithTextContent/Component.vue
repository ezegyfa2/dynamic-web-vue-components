<script>
    import CheckBoxInput from './../../../../../../helper-vue-components/src/Form/BootstrapFormItems/FormItems/Inputs/CheckBox/Component.vue'
    import SmallTextContent from './../../../../../../text-contents-vue-components/src/SmallTextContent/Component.vue'

    export default {
        mixins: [
            CheckBoxInput,
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
    @import "Style.scss";
</style>
