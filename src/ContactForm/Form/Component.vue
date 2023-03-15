<template lang="pug">
    include Template.pug
</template>

<script>
    import MultiPageForm from '../../../../helper-vue-components/src/Form/MultiPageForm/Component.vue'

    export default {
        mixins: [
            MultiPageForm
        ],
        props: {
            id: {
                type: String
            },
            title_section: {
                type: Object
            }
        },
        data() {
            return {
                formItemTypePrefix: 'dynamic-web-contact',
                clientId: 0
            }
        },
        methods: {
            onNextPage() {
                if (this.currentPageNumber == 1) {
                    $.post({
                        url: '/contact-us/clients',
                        data: this.getRequestData(this.form_item_sections[0])
                    }).done(response => {
                        if (response.success) {
                            this.clientId = response.id
                        }
                    })
                }
            }/*,
            submitForm() {
                $.post({
                    url: 'https://graph.facebook.com/{API_VERSION}/{PIXEL_ID}/events?access_token=EAAKgXuhD0hABACdNAZBABWp6U1o0oINvIFEZCShZBcWjZClzhFY9XADZCDaZBC8Ckz5tLuBXrrvcOnWfLYjuRplQ6oDAS6HJzPZAKViJMAXZBrZAZASnbNoNzq8He0zRUlgDTtKMZCF3Ch2ZB948Rd6cJvCgQpseM90AzZAVJoxP1wYHXiEMgDZAuYQWle',
                    data: this.getRequestData(this.form_item_sections[0])
                }).done(response => {
                    if (response.success) {
                        this.clientId = response.id
                    }
                })
                this.$refs.submitButton.submit()
            }*/
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
