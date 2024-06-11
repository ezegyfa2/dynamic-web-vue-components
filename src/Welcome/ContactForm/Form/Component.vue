<template lang="pug">
    include Template.pug
</template>

<script>
    import Form from 'helper-vue-components/Form/Form/Component.vue'
    import LazyBackgroundImage from 'helper-vue-components/LazyBackgroundImage/Component.vue'

    export default {
        mixins: [
            Form,
            LazyBackgroundImage,
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
            }
        },
        computed: {
            lazyBackgroundImages() {
                return [
                    {
                        ref: this.$refs.section,
                        url: 'contactform',
                        widths: [
                            320,
                            375,
                            425,
                            768,
                            1024,
                            1440,
                        ]
                    }
                ]
            },
            leftFormItemSections() {
                return this.convertedFormItemSections.filter((formItemSection) => {
                    return formItemSection.data.name != 'message'
                })
            },
            rightFormItemSections() {
                return this.convertedFormItemSections.filter((formItemSection) => {
                    return formItemSection.data.name == 'message'
                })
            }
        },
        methods: {
            submitForm() {
                if (!this.submitted) {
                    this.submitted = true
                    this.$refs.form.submit()
                    /*gtag('event', 'conversion', {
                        'send_to': 'AW-11090865003/PTfvCNPmr-8YEOvWxKgp',
                        'event_callback': (a,b,c) => {
                            this.$refs.form.submit()
                            console.log(a,b,c)
                        }
                    })*/
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
