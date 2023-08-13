
// const ContactPage = require('../../pages/contact_page')
// const ContentData = require('/Users/emmamakaryan/MambleLabsAutomation/data/content_data.js')
// const assert = require('assert')

// const CP = new ContactPage()
// const CD = new ContentData()

   /**
     * @param {String} nameType can be either 'validName', 'invalidShortName', 'invalidSymbolName' or null
     * @param {String} emailType can be either 'validEmail', 'invalidEmail' or 'null
     * @param {String} subjectType can be either 'validSubject', 'invalidShortSubject', 'invalidSymbolSubject' or null
     * @param {String} messageType can be either 'validMessage', 'invalidMessage' or null
     */
    // async inputData(nameType, emailType, subjectType, messageType) {
    //     // await this.fullName.waitForClickable()
    //     // await this.email.waitForClickable()
    //     // await this.subject.waitForClickable()
    //     // await this.message.waitForClickable()
    //     (nameType === 'validName') ? await this.fullName.setValue(InData.validName) :
    //         (nameType === 'invalidShortName') ? await this.fullName.setValue(InData.invalidShortName) :
    //             (nameType === 'invalidSymbolName') ? await this.fullName.setValue(InData.invalidSymbolName) :
    //                 (nameType === null) ? await this.fullName.setValue(InData.emptyString) :
    //                     console.error('Invalid nameType Input'); //how to abort the test if the argument set is incorrect?

    //     (emailType === 'validEmail') ? await this.email.setValue(InData.validEmail) :
    //         (emailType === 'invalidEmail') ? await this.email.setValue(InData.invalidEmail) :
    //             (emailType === null) ? await this.email.setValue(InData.emptyString) :
    //                 console.error('Invalid emailType Input');

    //     (subjectType === 'validSubject') ? await this.subject.setValue(InData.validSubject) :
    //         (subjectType === 'invalidShortSubject') ? await this.subject.setValue(InData.invalidShortSubject) :
    //             (subjectType === 'invalidSymbolSubject') ? await this.subject.setValue(InData.invalidSymbolSubject) :
    //                 (subjectType === null) ? await this.subject.waitForClickable() :
    //                     console.error('Invalid subjectType Input');

    //     (messageType === 'validMessage') ? await this.message.setValue(InData.validMessage) :
    //         (messageType === 'invalidMessage') ? await this.message.setValue(InData.invalidMessage) :
    //             (messageType === null) ? await this.message.setValue(InData.emptyString) :
    //                 console.error('Invalid messageType Input');

    //     await this.clickOutsideInput()




    //FINAL VALUE PAIR
    // get contactOptionsData() {
    //     return {
    //         email: ["Info@mamble.co", "mailto:Info@mamble.co"],
    //         phone: ['+374 55 553 210', "tel:+374 55 553 210"],
    //         location: ['1/2 Tsitsernakaberd Hwy, 4th entrance, 2nd floor', "https://www.google.com/maps/dir/ /Mamble+LLC+2nd+floor+1%2F2+Tsitsernakaberd+Highway+4th+entrance+Yerevan+0082/@40.1787514,44.4892689,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x406abdabf7ba76c5:0x6cb3f58bb7e50dc8!2m2!1d44.4892689!2d40.1787514"]
    //     }
    // }

      //FINAL VALUE PAIR
        // this.webRetrievedContactOptionsData = {

        //     email: [],
        //     phone: [],
        //     location: []

        // }
   //ARRAY OPTIONS TEXT & HREF SEPARATELY
    // async validateContactOptionsTexts() {
    //     let optionsTextsList = await this.contactOptions.map(option => option.getText())
    //     for (let i = 0; i < optionsTextsList.length; i++) {
    //         assert.equal(optionsTextsList[i], this.contactOptionsTexts[i], 'contact options texts are wrong')
    //     }
    // }

    // async validateContactOptionsHrefs() {
    //     let optionsHrefsList = await this.contactOptions.map(option => option.getAttribute('href'))
    //     for (let i = 0; i < optionsHrefsList.length; i++) {
    //         assert.equal(optionsHrefsList[i], this.contactOptionsHrefs[i], 'contact options hrefs are wrong')
    //     }

    // }

    // ARRAY OPTION + OBJECT

    // async validateContactOptions() {
    //     let optionsTextsList = await this.contactOptions.map(option => option.getText())
    //     let optionsHrefsList = await this.contactOptions.map(option => option.getAttribute('href'))
    //     for (let i = 0; i < Object.keys(this.contactOptionsData).length; i++) {
    //         assert.equal(optionsTextsList[i], Object.keys(this.contactOptionsData)[i], 'contact options texts are wrong')
    //         assert.equal(optionsHrefsList[i], Object.values(this.contactOptionsData)[i], 'contact options hrefs are wrong')
    //     }
    // }

    //FINAL VALUE PAIR
    // async validateContactOptions() {
    //     let keys = Object.keys(this.contactOptionsData)
    //     for (let i = 0; i < keys.length; i++) {
    //         Object.values(this.webRetrievedContactOptionsData)[i].push(await this.contactOptions[i].getText())
    //         Object.values(this.webRetrievedContactOptionsData)[i].push(await this.contactOptions[i].getAttribute('href'))
    //         for (let j = 0; j < Object.values(this.contactOptionsData)[i].length; j++) {
    //             assert.equal(Object.values(this.webRetrievedContactOptionsData)[i][j], Object.values(this.contactOptionsData)[i][j], `Contact Option Text & Href are Wrong! EXPECTED: ${Object.values(this.contactOptionsData)[i][j]}, \nACTUAL: ${Object.values(this.webRetrievedContactOptionsData)[i][j]}`)
    //         }

    //     }
    // }
      // ARRAY OPTION

    // async validateSocialMediaOptions() {
    //     let socialMediaHrefsList = await this.socialMediaOptions.map(option => option.getAttribute('href'))
    //     for (let i = 0; i < socialMediaHrefsList.length; i++) {
    //         assert.equal(socialMediaHrefsList[i], this.socialMediaOptionsHrefs[i], 'social media options hrefs are wrong')
    //     }

    // }
    // }




   