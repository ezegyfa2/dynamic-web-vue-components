<template lang="pug">
    include Template.pug
</template>

<script>
    import MultiPageForm from '../../../../helper-vue-components/src/Form/MultiPageForm/Component.vue'

    export default {
        mixins: [
            MultiPageForm
        ],
        props: {
            id: {
                type: String
            },
            title_section: {
                type: Object
            }
        },
        data() {
            return {
                formItemTypePrefix: 'dynamic-web-contact'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
