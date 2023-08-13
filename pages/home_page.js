/**
 * @author emakaryan
 * @date 09-12-2021
 */
const BasePage = require('../pages/base_page')
const assert = require('assert')
const { BrowserType } = require('@applitools/eyes-webdriverio')

class HomePage extends BasePage {

    get titleContent() { return 'Mamble Labs | Home' }
    get headlineText() { return 'Digital talent laboratories' }
    get subHeadline() { return $('.text-l') }
    get subHeadlineText() { return 'Become a part of the community for empowering the digital talents of Armenia' }
    get whatWeDoCards() { return $('.grid .Card_card__il94n') }
    get whatWeOfferBtn() { return $$('.WhatWeOffer_whatWeOffer__1tr7F a') }
    get cardDescriptions() { return $$('.Card_card__il94n .Card_card__withIcon__description__1bRvL') }
    get getStartedDesciption() { return $('.ConnectToYourFuture_connectToYourFuture__text__3Fx7Y p') }
    get getStartedDesciptionText() { return 'Apply your theoretical background in practice and step into your career path.' }
    get joinUsDescription() { return $('.JoinUs_joinUs__2Y4MP p') }
    get joinUsDescriptionText() { return 'Start communication to gain benefits' }
    get yourProjectDescriptions() { return $$('.grid-cols-1 div ul li p') }
    get partnerLogos() { return $$(' .PartnerDesktopView_partnerItem__1d4Uw a') }

    get yourProjectDescriptionTexts() {
        return {
            'Non-urgent project': 'Hand over your non-critical tasks to students, who will take the implementation with a slower pace yet deliver mentor-approved, quality assured results.',
            'Recurring projects': 'Start your efficient and long-term partnership with Mamble Labs around your recurring projects and get access to the expanding talent pool.',
            'Scoped work': 'To encourage successful partnership, we offer you to bring your scoped project with clearly outlined start and endpoints to the collaboration table where the team of juniors will work on the project.'
        }
    }

    get primaryBtnData() {
        return {
            'Get involved': '/contact-us',
            'Get started': '/internship',
            'Become a partner': '/contact-us'
        }
    }

    get secondaryBtnData() {
        return {
            'Become an intern': 'https://forms.gle/zs6Fgqxfgcbqa8Je9'
        }
    }

    get whatWeOfferBtnData() {
        return {
            'See what we offer': '/partnership'
        }
    }


    get webRetrievedPrimaryBtnData() {
        return new Map()
    }
    get webRetrievedSecondaryBtnData() {
        return new Map()
    }
    get webRetrivedWhatWeOfferBtnData() {
        return new Map()
    }

    get subtitleTexts() {
        return {
            1: 'What we do',
            2: 'Your projects handled by growing talents',
            3: 'Our partners',
            4: 'Connect to your future',
            5: 'Join the community'
        }

    }

    get blockSubtitleTexts() {
        return {
            1: 'Finding talents',
            2: 'Building partnerships',
            3: 'Getting results',
            4: 'Non-urgent project',
            5: 'Recurring projects',
            6: 'Scoped work'
        }

    }
    get cardDescriptionTexts() {
        return {
            'Finding talents': 'We create a community of growing specialists by identifying talents, setting a platform to transform knowledge into skills by filling the gap with practice.',
            'Building partnerships': 'To fulfill the concept of the community, we engage partners to reach their business objectives, simultaneously contributing to talent development.',
            'Getting results': 'We support talent growth and develop digital solutions, building and maintaining a sustainable platform that will help us succeed in creating a community of specialists.'
        }

    }

    get partnerLogoData() {
        return {
            'Hetq Media Factory – մեդիա գործիր իրականությունդ': 'http://mediafactory.am/',
            'Peer to peer recognition and reward system | Lucky Carrot': 'https://luckycarrotapp.com/',
            'Deep Learning for LabVIEW | Ngene LLC | Yerevan': 'https://www.ngene.co/',
            'Mamble LLC': 'https://mamble.co/',
            'Earlyone | Increasing Customer Lifetime Value with Efficient Software Tools': 'https://earlyone.com/'
        }

    }

    async validateCardDescriptions() {
        let values = Object.values(this.cardDescriptionTexts)
        for (let i = 0; i < values.length; i++) {
            await this.cardDescriptions[i].waitForDisplayed()
            assert.equal(await this.cardDescriptions[i].getText(), values[i], `Wrong Card Description\n Expected: ${values[i]}\n Actual: ${await this.cardDescriptions[i].getText()}`)
        }
    }

    async validateYourProjectsDescriptions() {
        let values = Object.values(this.yourProjectDescriptionTexts)
        for (let i = 0; i < values.length; i++) {
            await this.yourProjectDescriptions[i].waitForDisplayed()
            assert.equal(await this.yourProjectDescriptions[i].getText(), values[i], `Wrong "${Object.keys(this.yourProjectDescriptionTexts)[i]}" Description\n Expected: ${values[i]}\n Actual: ${await this.yourProjectDescriptions[i].getText()}`)
        }
    }

    async validateGetStartedDescription() {
        await this.getStartedDesciption.waitForDisplayed()
        assert.equal(await this.getStartedDesciption.getText(), this.getStartedDesciptionText, `Wrong "Get Started" Section Subtitle Description\n Expected: ${this.getStartedDesciptionText}\n Actual: ${await this.getStartedDesciption.getText()}`)
    }

    async validateJoinUsDescription() {
        await this.joinUsDescription.waitForDisplayed()
        assert.equal(await this.joinUsDescription.getText(), this.joinUsDescriptionText, `Wrong "Join Us" Section Subtitle Description\n Expected: ${this.joinUsDescriptionText}\n Actual: ${await this.joinUsDescription.getText()}`)

    }

    async validateWhatWeOfferBtn() {
        await this.whatWeOfferBtn.waitForClickable()
        this.webRetrivedWhatWeOfferBtnData[await this.whatWeOfferBtn.getText()] = await this.whatWeOfferBtn.getAttribute('href')
        assert.equal(Object.keys(this.webRetrivedWhatWeOfferBtnData)[0], Object.keys(this.whatWeOfferBtnData)[0], `The text of 'See what we offer" btn is incorrect \nEXPECTED: ${Object.keys(this.whatWeOfferBtnData)[0]} \nACTUAL: ${Object.keys(await this.webRetrivedWhatWeOfferBtnData)[0]}`)
        assert.equal(Object.values(this.webRetrivedWhatWeOfferBtnData)[0], Object.values(this.whatWeOfferBtnData)[0], `The href of 'See what we offer" btn is incorrect \nEXPECTED: ${Object.values(this.whatWeOfferBtnData)[0]} \nACTUAL: ${Object.values(await this.webRetrivedWhatWeOfferBtnData)[0]}`)
    }

    async validatePartnerLogoData() {
        let values = Object.values(this.partnerLogoData)
        let key = Object.keys(this.partnerLogoData)

        for (let i = 0; i < values.length; i++) {
            await this.partnerLogos[i].waitForClickable()
            assert.equal(await this.partnerLogos[i].getAttribute('href'), values[i], `Logo href is incorrect \nEXPECTED: ${values[i]} \n${await this.partnerLogos[i].getAttribute('href')}`)
            assert.equal(await this.partnerLogos[i].getAttribute('rel'), 'nofollow noreferrer', `Logo does not have rel="nofollow noreferrer" tag \nEXPECTED: 'nofollow noreferrer' \n${await this.partnerLogos[i].getAttribute('rel')}`)
            assert.equal(await this.partnerLogos[i].getAttribute('target'), '_blank', `Logo does not have target="_blank" tag \nEXPECTED: '_blank' \n${await this.partnerLogos[i].getAttribute('target')}`)

            await this.partnerLogos[i].click()
            if (values[i].includes('https')) {
                await browser.switchWindow(values[i])
            } else {
                await browser.switchWindow(values[i].replace('http', 'https'))
            }
            await expect(browser).toHaveTitle(key[i])
            await this.switchBackToMainPage()

            // SHOULD I MAKE A SEPARATE FUNCTION FOR ATTRIBUTE CHECK?
        }

    }
}


module.exports = HomePage




