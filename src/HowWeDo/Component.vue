<script>
    import Roadmap from '../../../helper-vue-components/src/Roadmap/Component.vue'

    export default {
        mixins: [
            Roadmap,
        ],
        props: {
            id: {
                type: String,
                default: 'how_we_do'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
