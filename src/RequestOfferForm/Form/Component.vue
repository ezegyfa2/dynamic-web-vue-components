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
                formItemTypePrefix: 'dynamic-web-request-offer',
                clientId: 0,
                sumPrice: 0,
                orderType: 0,
                baseFormItemSections: [],
                max: 0,
                lastSentClientData: '',
            }
        },
        mounted() {
            this.max = this.getTotalPrice()
            this.form_item_sections = this.getFormItemSections()
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
                        this.sendClientData()
                        this.form_item_sections = this.getFormItemSections()
                        this.sumPrice = this.getSumPrice()
                    }
                }
            },
            sendClientData() {
                if (this.lastSentClientData != this.getClientData()) {
                    this.lastSentClientData = this.getClientData()
                    $.post({
                        url: '/request-offer/clients',
                        data: this.getRequestData(this.form_item_sections[0])
                    }).done(response => {
                        if (response.success) {
                            this.clientId = response.id
                        }
                    })
                    sendFacebookAPIEvent('InitiateCheckout', sha256(this.getEmail())).always(response => {
                        console.log(response)
                    })
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
            getTotalPrice() {
                let sum = 0
                for (let i = 1; i < this.form_item_sections.length; ++i) {
                    this.form_item_sections[i].forEach(formItemSection => {
                        sum += formItemSection.data.price
                    })
                }
                return sum
            },
            submitForm() {
                if (!this.submitted) {
                    this.submitted = true
                    let customData = {
                        currency: 'RON',
                        value: this.getSumPrice()
                    }
                    sendFacebookAPIEvent('ViewContent', sha256(this.getEmail()), customData).always(response => {
                        console.log(response)
                        this.$refs.form.submit()
                    })
                }
            },
            getEmail() {
                for (let formItemSection of this.form_item_sections[0]) {
                    if (formItemSection.data && formItemSection.data.name == 'email') {
                        return formItemSection.data.value
                    }
                }
                return null
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
            getClientData() {
                let clientFormItemSections = this.form_item_sections[0].filter(formItemSection => {
                    return formItemSection.data && formItemSection.data.value && formItemSection.data.name != 'order_type'
                })
                let clientValues = clientFormItemSections.map(formItemSection => {
                    return formItemSection.data.value
                })
                return JSON.stringify(clientValues)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
