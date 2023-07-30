<template lang="pug">
    include Template.pug
</template>

<script>
    import SmallTextContent from '../../../../text-contents-vue-components/src/SmallTextContent/Component.vue'

    export default {
        mixins: [
            SmallTextContent
        ],
        props: {
            url: {
                type: String
            },
            button_content: {
                type: String,
                default: 'Contact us'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>