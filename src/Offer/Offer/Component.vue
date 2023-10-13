<template lang="pug">
    include Template
</template>

<script>
    export default {
        props: {
            title_section: {
                type: Object
            },
            offer_parts: {
                type: Array
            },
            button_title: {
                type: String
            },
            button_link: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>
