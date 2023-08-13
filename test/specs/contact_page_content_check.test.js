const ContactPage = require('../../pages/contact_page')
const ContentData = require('../../data/input_data.js')
const assert = require('assert')

const CP = new ContactPage()
const CD = new ContentData()


describe('VALIDATING THE CONTENT OF THE "CONTACT US" PAGE', () => {
    beforeEach(() => {
        CP.navigate()
    })
    it('Validating all the elements of the Contact Us page', async () => {
        await CP.validatePageTitle()
        await CP.validateHeadline()
        await CP.validateContactOptions(CP.contactOptions, CP.contactOptionsData, CP.webRetrivedContactOptionsData)
        await CP.validateContactOptions(CP.socialMediaOptions, CP.socialMediaOptionsData, CP.webRetrievedSocialMediaOptionsData)
        await CP.validateFieldTitles()
    })

})