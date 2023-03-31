<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            line_count: {
                type: Number,
                default: 0
            },
            current_index: {
                type: Number,
                default: 0
            }
        },
        methods: {
            previous() {
                this.$emit('update:current_index', this.current_index - 1)
            },
            next() {
                this.$emit('update:current_index', this.current_index + 1)
            },
            getLineClass(lineNumber) {
                if (lineNumber <= this.current_index) {
                    return 'bold-line'
                }
                else {
                    return 'normal-line'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
