<template lang="pug">
    include Template.pug
</template>

<script>
    import MediumTextContent from '../MediumTextContent/Component.vue'
    import ClassAdder from '../../../../helper-vue-components/src/ClassAdder.vue'

    export default {
        mixins: [
            MediumTextContent,
            ClassAdder
        ],
        props: {
            title: {
                type: String
            },
            content: {
                type: String
            },
            url: {
                type: String
            },
            button_content: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
