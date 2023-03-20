<template lang="pug">
    include Template.pug
</template>

<script>
    import CheckBoxInput from './../../../../../../helper-vue-components/src/Form/FormItemsWithoutLabel/Inputs/CheckBox/Component.vue'

    export default {
        mixins: [
            CheckBoxInput
        ],
        props: {
            title_label: {
                type: String
            },
            description_label: {
                type: String
            },
            price: {
                type: Number
            },
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
