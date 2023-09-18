<template lang="pug">
    include Template.pug
</template>

<script>
    import MediumTextContent from 'text-contents-vue-components/MediumTextContent/Component.vue'

    export default {
        mixins: [
            MediumTextContent,
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
