<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            id: {
                type: String
            },
            title_section: {
                type: Object
            },
            thank_you_section: {
                type: Object
            },
            thank_you_content: {
                type: String
            },
            email: {
                type: String
            },
            email_address: {
                type: String
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
