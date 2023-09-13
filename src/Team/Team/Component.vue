<script>
    import Team from 'helper-vue-components/Team/Team/Component.vue'

    export default {
        mixins: [
            Team
        ],
        props: {
            id: {
                type: String,
                default: 'our_team'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
