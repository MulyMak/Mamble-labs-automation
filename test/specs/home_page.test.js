const HomePage = require('../../pages/home_page')

const HP = new HomePage()

describe('VALIDATING THE CONTENT OF THE "HOME" PAGE', () => {
    beforeEach(() => {
        HP.navigate()
    })
    it('Validating all the elements and content of the Home page', async () => {
        await HP.validatePageTitle()
        await HP.validateHeadline()
        await HP.validateSubHeadline()
        await HP.validateBtns(HP.primaryBtns, HP.primaryBtnData, HP.webRetrievedPrimaryBtnData)
        await HP.validateBtns(HP.secondaryBtns, HP.secondaryBtnData, HP.webRetrievedSecondaryBtnData)
        await HP.validateBtns(HP.whatWeOfferBtn, HP.whatWeOfferBtnData, HP.webRetrivedWhatWeOfferBtnData)
        await HP.validateSubtitles()
        await HP.validateBlockSubtitles()
        await HP.validateCardDescriptions()
        await HP.validateGetStartedDescription()
        await HP.validateYourProjectsDescriptions()
        await HP.validateJoinUsDescription()
        await HP.validatePartnerLogoData()  
    })
})