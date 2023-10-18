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
        },
        data() {
            return {
                imageWidths: [
                    227,
                    282,
                    332,
                    323,
                    203,
                    203,
                    203,
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>