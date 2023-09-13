<script>
    import Col4Container from 'helper-vue-components/Containers/Col4Container/Component'

    export default {
        mixins: [
            Col4Container
        ],
        mounted() {
            alignHeightsBySelector('.offer-container-layout .container-layout')
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>
