<script>
    import NavigationLink from 'helper-vue-components/NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue'
    import ClassAdder from 'helper-vue-components/ClassAdder.vue'

    export default {
        mixins: [
            NavigationLink,
            ClassAdder,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "../../Style";
</style>
