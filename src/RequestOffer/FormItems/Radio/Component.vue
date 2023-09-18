<template lang="pug">
    include Template.pug
</template>

<script>
    import Radio from 'helper-vue-components/Form/FormItems/Radio/Component.vue'

    export default {
        mixins: [
            Radio,
        ],
        props: {
            title: {
                type: String
            },
            options: {
                type: Array
            }
    }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
