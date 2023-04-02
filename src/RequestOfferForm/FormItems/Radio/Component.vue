<template lang="pug">
    include Template.pug
</template>

<script>
    import Radio from '../../../../../helper-vue-components/src/Form/FormItems/Radio/Component.vue'

    export default {
        mixins: [
            Radio,
        ],
        props: {
            options: {
                type: Array
            }
    }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
