<script>
    import MessageBox from '../MessageBox/Component.vue'

    export default {
        mixins: [
            MessageBox
        ],
        data() {
            return {
                iconClass: 'fa fa-exclamation'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>