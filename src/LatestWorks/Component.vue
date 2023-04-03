<template lang="pug">
    include Template
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: 'our_works'
            },
            title_section: {
                type: Object
            },
            images: {
                type: Array
            },
            request_offer_section: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>