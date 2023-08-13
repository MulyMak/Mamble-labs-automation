const ContactPage = require('../../pages/contact_page')
const InputData = require('../../data/input_data.js')


const CP = new ContactPage()
const InData = new InputData()

// //APPLITOOLS
// const { Eyes, Target, BatchInfo } = require('@applitools/eyes-webdriverio')
// // const Target = require('@applitools/eyes-webdriverio')
// const eyes = new Eyes()
// const batchInfoInstance = new BatchInfo('Contact Us Page Batch')
// // const target = new Target()
// eyes.setApiKey('XP7dPN87xvNbUtT9I2jOWxDa35XsobWlu6LU4q7106B2M110')




describe('Contact Email Test', () => {
    beforeEach(() => {
        CP.navigate()
    })
    it('Login with FULL VALID CREDENTIALS', async () => {
        await CP.inputData(InData.validName, InData.validEmail, InData.validSubject, InData.validMessage)
        await CP.assertNoError()
        await CP.submitEmail()
        // await Promise.all([CP.assertMessageSent(), CP.checkRequestStatus(CP.urlCodeRequestList)])    how to perform two actions without one waiting fro the othe rin async mode?
        CP.assertMessageSent()
        await CP.checkRequestStatus(CP.urlCodeRequestList)
        await browser.pause(3000)
    })

    it('Login with FULL IVALID/EMPTY CREDENTIALS', async () => {
        await CP.inputData(InData.emptyString, InData.emptyString, InData.emptyString, InData.emptyString)
        await CP.submitEmail()
        await CP.assertEmptyError(CP.nameError, CP.emptyNameErrorText)
        await CP.assertEmptyError(CP.emailError, CP.emptyEmailErrorText)
        await CP.assertEmptyError(CP.subjectError)
        await CP.assertEmptyError(CP.messageError, CP.emptyMessageErrorText)
        await CP.assertMessageNotSent()
        await browser.pause(3000)
    })

    it('Login with INVALID SHORT FULLNAME Data', async () => {
        await CP.inputData(InData.invalidShortName, InData.validEmail, InData.validSubject, InData.validMessage)
        await CP.submitEmail()
        await CP.assertInvalidError(CP.nameError, CP.invalidShortNameErrorText)
        await CP.assertMessageNotSent()
        await browser.pause(3000)
    })

    it('Login with INVALID SYMBOL/NUMBER FULLNAME Data', async () => {
        await CP.inputData(InData.invalidSymbolName, InData.validEmail, InData.validSubject, InData.validMessage)
        await CP.submitEmail()
        await CP.assertInvalidError(CP.nameError, CP.invalidSymbolNameErrorText)
        await CP.assertMessageNotSent()
        await browser.pause(3000)
    })

    it('Login with INVALID EMAIL Data', async () => {
        await CP.inputData(InData.validName, InData.invalidEmail, InData.validSubject, InData.validMessage)
        await CP.submitEmail()
        await CP.assertInvalidError(CP.emailError, CP.invalidEmailErrorText)
        await CP.assertMessageNotSent()
        await browser.pause(3000)

    })

    it('Login with INVALID SHORT SUBJECT Data', async () => {
        await CP.inputData(InData.validName, InData.validEmail, InData.invalidShortSubject, InData.validMessage)
        await CP.submitEmail()
        await CP.assertInvalidError(CP.subjectError, CP.invalidShortSubjectErrorText)
        await CP.assertMessageNotSent()
        await browser.pause(3000)

    })

    it('Login with INVALID SYMBOL SUBJECT Data', async () => {
        await CP.inputData(InData.validName, InData.validEmail, InData.invalidSymbolSubject, InData.validMessage)
        await CP.submitEmail()
        await CP.assertInvalidError(CP.subjectError, CP.invalidSymbolSubjectErrorText)
        await CP.assertMessageNotSent()
        await browser.pause(3000)

    })

    it('Login with INVALID MESSAGE Data', async () => {
        await CP.inputData(InData.validName, InData.validEmail, InData.validSubject, InData.invalidMessage)
        await CP.submitEmail()
        await CP.assertInvalidError(CP.messageError, CP.invalidMessageErrorText)
        await CP.assertMessageNotSent()
        await browser.pause(3000)
    })

})

