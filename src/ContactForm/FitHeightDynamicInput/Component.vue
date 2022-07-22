<template lang="pug">
    include ../../../../helper-vue-components/src/Form/DynamicInput/InputWithoutLabel.pug
</template>

<script>
    import DynamicInput from './../../../../helper-vue-components/src/Form/DynamicInput/Component.vue'

    export default {
        mixins: [
            DynamicInput
        ]
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
