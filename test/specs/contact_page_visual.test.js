const ContactPage = require('../../pages/contact_page')
const ContentData = require('../../data/input_data.js')
const assert = require('assert')
const softAssert = require('soft-assert')
const axios = require('axios')

const CP = new ContactPage()
const CD = new ContentData()

//APPLITOOLS
const { Eyes, Target, BatchInfo } = require('@applitools/eyes-webdriverio')
// const Target = require('@applitools/eyes-webdriverio')
const eyes = new Eyes()
const batchInfoInstance = new BatchInfo('Contact Us Page Batch')
// const target = new Target()
eyes.setApiKey('XP7dPN87xvNbUtT9I2jOWxDa35XsobWlu6LU4q7106B2M110')


describe('Contact Email Test', () => {
    beforeEach(() => {
        CP.navigate()
    })
    it('Checks the page UI', async () => {
        await eyes.setBatch(batchInfoInstance)
        await eyes.open(browser, 'Mamble Labs', 'Contact Us page UI test')
        await eyes.checkWindow('full window check', 1000, true)
        await eyes.checkWindow('full window 2nd check', 1000, true)
        await eyes.close()

    })

})

