<template lang="pug">
    include Template.pug
</template>

<script>
    import Form from '../../../../helper-vue-components/src/Form'

    export default {
        mixins: [
            Form
        ],
        props: {
            id: {
                type: String
            },
            title_section: {
                type: Object
            },
            left_input_sections: {
                type: Array
            },
            right_input_sections: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
