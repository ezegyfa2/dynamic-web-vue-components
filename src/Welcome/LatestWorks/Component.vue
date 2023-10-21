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
                    292, // 320px
                    347, // 375px
                    397, // 425px
                    380, // 768px
                    210, // 1024px
                    355, // 1440px
                    355, // 2550px
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>