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
            },
            sum_price_label: {
                type: String
            },
            selected_order_type: {
                type: Number,
                default: 0
            },
            presentation_website_form_item_sections: {
                type: Array
            },
            webshop_form_item_sections: {
                type: Array
            },
            client_form_item_sections: {
                type: Array
            },
            contact_pagination_section: {
                type: Object
            }
        },
        data() {
            return {
                formItemTypePrefix: 'dynamic-web-contact',
                clientId: 0,
                sumPrice: 0,
                orderType: 0,
                baseFormItemSections: []
            }
        },
        methods: {
            next() {
                let invalidHtmlElement = this.getInvalidFormSection()
                if (invalidHtmlElement) {
                    invalidHtmlElement.reportValidity()
                }
                else if (this.form_item_sections.length == 1 || this.currentPageNumber < this.form_item_sections.length - 1) {
                    this.orderType = this.getSelectedOrderType()
                    ++this.currentPageNumber
                    if (this.currentPageNumber == 1) {
                        $.post({
                            url: '/contact-us/clients',
                            data: this.getRequestData(this.form_item_sections[0])
                        }).done(response => {
                            if (response.success) {
                                this.clientId = response.id
                            }
                        })
                        this.form_item_sections = this.getFormItemSections()
                        this.sumPrice = this.getSumPrice()
                    }
                }
            },
            getSelectedOrderType() {
                for (let formItemSection of this.form_item_sections[0]) {
                    if (formItemSection.data && formItemSection.data.name == 'order_type') {
                        return formItemSection.data.value
                    }
                }
            },
            valueChanged(formItemSection, newValue) {
                formItemSection.data.value = newValue
                this.sumPrice = this.getSumPrice()
            },
            getSumPrice() {
                let sum = 0
                for (let i = 1; i < this.form_item_sections.length; ++i) {
                    this.form_item_sections[i].forEach(formItemSection => {
                        if (formItemSection.data && formItemSection.data.value === true) {
                            sum += formItemSection.data.price
                        }
                    })
                }
                return sum
            },
            submitForm() {
                if (!this.submitted) {
                    this.submitted = true
                    $.post({
                        url: 'https://graph.facebook.com/v16.0/740173934391972/events?access_token=EAAKgXuhD0hABAHuizsiH4BqnWNp0Rhi3Wx2sgv41C6mCo6YN04sghp6ZA4IECaKpJb7LEga8hsVvNnY0BKeEvkIqxs1SMsVJGkntuYOPgILdvWZA0IrDP6uBqOTbPET1kIzDFT9W17OwjKMf1Rcm9YuJUVaP3zd5MmaYf9WZCkyE4w5hqdx',
                        data: this.getFacebookAPIData()
                    }).done(response => {
                        console.log(response)
                        this.$refs.form.submit()
                    })
                }
            },
            back() {
                if (this.currentPageNumber == 0) {
                    this.orderType = 0
                }
                else {
                    --this.currentPageNumber
                }
            },
            getFormItemSections() {
                if (this.orderType == 1) {
                    return [ this.client_form_item_sections, ...this.webshop_form_item_sections ]
                }
                else {
                    return [ this.client_form_item_sections, ...this.presentation_website_form_item_sections ]
                }
            },
            getFacebookAPIData() {
                return {
                    data: [
                        {
                            event_name: 'Purchase',
                            event_time: 1679777643,
                            action_source: 'website',
                            user_data: {
                                em: [
                                    sha256('asd@asd.com')
                                ],
                                ph: [
                                    null
                                ]
                            },
                            custom_data: {
                                currency: 'RON',
                                value: this.getSumPrice()
                            }
                        }
                    ],
                    test_event_code: 'TEST10976'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
