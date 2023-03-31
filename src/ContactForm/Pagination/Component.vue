<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            line_number: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                lines: this.makeLines(),
                currentIndex: 0,
            }
        },
        methods: {
            makeLines() {
                let lines = []
                if (this.line_number > 0) {
                    for (let i = 0; i < this.line_number; i++) {
                        if (i === 0) {
                            lines.push('bold-line')
                        } else {
                            lines.push('normal-line')
                        }
                    }
                }
                return lines
            },
            previous() {
                const newLines = [...this.lines];
                newLines[this.currentIndex] = 'normal-line';
                this.lines = newLines;
                this.currentIndex--;
            },
            next() {
                const newLines = [...this.lines];
                this.currentIndex++;
                newLines[this.currentIndex] = 'bold-line';
                this.lines = newLines;
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
