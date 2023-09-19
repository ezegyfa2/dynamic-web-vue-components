<template lang="pug">
include Template.pug
</template>

<script>
    import CheckBoxInput from '../CheckBox/Component.vue'

    export default {
        mixins: [
            CheckBoxInput,
        ],
        props: {
            url: {
                type: String
            },
            url_label: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
