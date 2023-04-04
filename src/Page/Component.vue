<script>
    import Page from './../../../helper-vue-components/src/Page/Component.vue'

    export default {
        mixins: [
            Page,
        ],
        beforeMount() {
            sendFacebookAPIEvent('ViewContent')
        },
    }
</script>
