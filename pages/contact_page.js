/**
 * @author emakaryan
 * @date 20-11-2021
 */
const BasePage = require('../pages/base_page')
const InputData = require('../data/input_data')
const assert = require('assert')
const { reverse } = require('dns')
const { isPrimitive } = require('util')
const InData = new InputData


class ContactPage extends BasePage {

    get titleContent() { return 'Mamble Labs | Contact Us' }
    get requiredPartOfUrl() { return 'contact-us' }
    get headlineText() { return 'Get in touch\nwith us' }
    get fullName() { return $('[name="username"]') }
    get email() { return $('#Email') }
    get subject() { return $('#Subject') }
    get message() { return $('#Message') }
    get fullNameTitle() { return $('label[for="Full name"]') }
    get fullNameTitleText() { return 'Full name*' }
    get emailTitle() { return $('label[for="Email"]') }
    get emailTitleText() { return 'Email*' }
    get subjectTitle() { return $('label[for="Subject"]') }
    get subjectTitleText() { return 'Subject' }
    get messageTitle() { return $('label[for="Message"]') }
    get messageTitleText() { return 'Message*' }
    get submitBtn() { return $('.Form_button__e3ZeX .Button_button__outline__1aGv4') }
    get contactOptions() { return $$('.Contacts_contact__2w87W a') }
    get socialMediaOptions() { return $$('.SocialLinks_link__20wbu a') }

    get contactOptionsData() {
        return {
            'Info@mamble.co': "mailto:Info@mamble.co",
            '+374 55 553 210': "tel:+374 55 553 210",
            '1/2 Tsitsernakaberd Hwy, 4th entrance, 2nd floor': "https://www.google.com/maps/dir/ /Mamble+LLC+2nd+floor+1%2F2+Tsitsernakaberd+Highway+4th+entrance+Yerevan+0082/@40.1787514,44.4892689,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x406abdabf7ba76c5:0x6cb3f58bb7e50dc8!2m2!1d44.4892689!2d40.1787514"
        }
    }


    get socialMediaOptionsData() {
        return {
            'https://www.facebook.com/mambleLLC': '_blank',
            'https://www.linkedin.com/company/mamble/': '_blank',
            'https://www.instagram.com/mamble_llc/': '_blank'
        }
    }


    get webRetrievedSocialMediaOptionsData() {
        return new Map()
    }
    get webRetrivedContactOptionsData() {
        return new Map()
    }
    get urlCodeRequestList() {
        return {
            '/api/recaptcha-check': ['POST', 200],
            '/api/contact-us': ['POST', 200]
        }
    }

    //ERRORS

    get nameError() { return $('//*[@id="__next"]/main/section/div[2]/form/div[1]/div[1]/small') }
    get emptyNameErrorText() { return 'Name is required' }
    get invalidShortNameErrorText() { return 'Name should contain at least 2 characters' }
    get invalidSymbolNameErrorText() { return 'Name can not contain symbols and units' }
    get emailError() { return $('//*[@id="__next"]/main/section/div[2]/form/div[1]/div[2]/small') }
    get invalidEmailErrorText() { return 'Please enter a valid email address' }
    get emptyEmailErrorText() { return 'Email is required' }
    get messageError() { return $('//*[@id="__next"]/main/section/div[2]/form/div[3]/div/small') }
    get emptyMessageErrorText() { return 'Message is required' }
    get invalidMessageErrorText() { return 'Message should contain at least 10 characters' }
    get subjectError() { return $('//*[@id="__next"]/main/section/div[2]/form/div[2]/div/small') }
    get invalidShortSubjectErrorText() { return 'Subject should contain at least 4 characters' }
    get invalidSymbolSubjectErrorText() { return 'Subject can not start with symbols' }

    get failedDeliveryError() { return $('//*[@id="__next"]/main/section/div[2]/form/div[4]/p') }
    get failedDeliveryErrorText() { return 'Couldn’t submit form due to a temporary issue. Try again later' }

    //SUCCESS MESSAGE

    get successBox() { return $('.Success_success__1k59I') }
    get successIcon() { return $('.Success_success__1k59I  > div ') }
    get successMessage() { return $('.Success_success__1k59I  > h3') }
    get successMessageText() { return 'successfully\nsent' }


    //COMBINATIONS OF VALID AND INVALID INPUTS

    async inputData(nameType, emailType, subjectType, messageType) {
        await this.fullName.waitForClickable()
        await this.email.waitForClickable()
        await this.subject.waitForClickable()
        await this.message.waitForClickable()
        await this.fullName.setValue(nameType);
        await this.email.setValue(emailType);
        (subjectType === InData.emptyString) ? await this.subject.waitForClickable() : await this.subject.setValue(subjectType);
        await this.message.setValue(messageType);
        await this.clickOutsideInput()

    }


    async submitEmail() {
        await this.submitBtn.waitForClickable()
        await this.submitBtn.click()
    }

    //VALIDATIONS

    async assertNoError() {
        assert(await this.nameError.waitForDisplayed({ reverse: true }), 'Name Error is Displayed')
        assert(await this.emailError.waitForDisplayed({ reverse: true }), 'Email Error is Displayed')
        assert(await this.subjectError.waitForDisplayed({ reverse: true }), 'Subject Error is Displayed')
        assert(await this.messageError.waitForDisplayed({ reverse: true }), 'Message Error is Displayed')
    }

    async assertEmptyError(errElem, emptyErrText = null) {
        if (errElem !== this.subjectError && emptyErrText !== null) {
            assert(await errElem.waitForExist(), 'Error Message Element Does Not Exist')
            assert.equal(await errElem.getText(), emptyErrText, `Wrong Error Text! \nEXPECTED: ${emptyErrText} \nACTUAL: ${await errElem.getText()}`)
        } else {
            await this.subjectError.waitForDisplayed({ reverse: true })
        }
    }

    async assertInvalidError(errElem, invalidErrText) {
        assert(await errElem.waitForExist(), 'Error Message Element Does Not Exist')
        assert.equal(await errElem.getText(), invalidErrText, `Wrong Error Text! \nEXPECTED: ${invalidErrText} \nACTUAL: ${await errElem.getText()}`)

    }

    async assertMessageSent() {
        assert(await this.successBox.waitForDisplayed(), 'Success Message Box is Not Displayed')
        assert(await this.successIcon.waitForDisplayed(), 'Success Message Icon is Not Displayed')
        assert(await this.successMessage.waitForDisplayed(), 'Success Message is Not Displayed')
        assert.equal(await this.successMessage.getText(), this.successMessageText, `Wrong Success Message Text \nEXPECTED: ${this.successMessageText} \nACTUAL: ${await this.successMessage.getText()}`)
    }

    async assertMessageNotSent() {
        assert(await this.successBox.waitForDisplayed({ reverse: true }), 'Success Message Box is Displayed')
        assert(await this.successIcon.waitForDisplayed({ reverse: true }), 'Success Message Icon is Displayed')
        assert(await this.successMessage.waitForDisplayed({ reverse: true }), 'Success Message is Displayed')
    }

    async validateFieldTitles() {
        assert(await this.fullNameTitle.waitForDisplayed(), 'Full Name Field Title is Not Displayed')
        assert.equal(await this.fullNameTitle.getText(), this.fullNameTitleText, `Incorrect Full Name Field Title Text \nEXPECTED: ${this.fullNameTitleText} \nACTUAL: ${await this.fullNameTitle.getText()}`)
        assert(await this.emailTitle.waitForDisplayed(), 'Email Field Title is Not Displayed')
        assert.equal(await this.emailTitle.getText(), this.emailTitleText, `Incorrect Email Field Title Text \nEXPECTED: ${this.emailTitleText} \nACTUAL: ${await this.emailTitle.getText()}`)
        assert(await this.subjectTitle.waitForDisplayed(), 'Subject Field Title is Not Displayed')
        assert.equal(await this.subjectTitle.getText(), this.subjectTitleText, `Incorrect Subject Field Title Text \nEXPECTED: ${this.subjectTitleText} \nACTUAL: ${await this.subjectTitle.getText()}`)
        assert(await this.fullNameTitle.waitForDisplayed(), 'Message Field Title is Not Displayed')
        assert.equal(await this.messageTitle.getText(), this.messageTitleText, `Incorrect Message Field Title Text \nEXPECTED: ${this.messageTitleText} \nACTUAL: ${await this.messageTitle.getText()}`)

    }


    async validateContactOptions(optionType, optionData, webData) {
        let keys = Object.keys(optionData)
        for (let i = 0; i < keys.length; i++) {
            await optionType[i].waitForClickable()
            if (JSON.stringify(await optionType) === JSON.stringify(await this.contactOptions)) {
                webData[await optionType[i].getText()] = await optionType[i].getAttribute('href')
            } else {
                webData[await optionType[i].getAttribute('href')] = await optionType[i].getAttribute('target')
            }
            for (let j = 0; j < keys.length; j++) {
                assert.equal(Object.entries(webData)[i][j], Object.entries(optionData)[i][j], `Contact Option Text & Href are Wrong! \nEXPECTED: ${Object.entries(optionData)[i][j]}, \nACTUAL: ${Object.entries(webData)[i][j]}`)
            }
        }
    }



}

module.exports = ContactPage


