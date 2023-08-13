
/**
 * @author emakaryan
 * @date 20-11-2021
 */
const assert = require('assert')
const softAssert = require('soft-assert')
const axios = require('axios')



class BasePage {

    get body() { return $('body') }
    get headline() { return $('h1') }
    get primaryBtns() { return $$('.Link_primary__2el8x') }
    get secondaryBtns() { return $$('.Link_secondary__32Ge5') }
    get subtitles() { return $$('h2') }
    get blockSubtitles() { return $$('h3') }



    async navigate(params = '') {
        if (await this.requiredPartOfUrl == null) {
            browser.url('/' + params)

        }
        else {
            browser.url('/' + this.requiredPartOfUrl + params)
        }
    }

    async clickOutsideInput() {
        await this.body.click()
    }


    async validateHeadline() {
        await this.headline.waitForDisplayed()
        assert.equal(await this.headline.getText(), this.headlineText, `Wrong Headline\n Expected: ${this.headlineText}\n Actual: ${await this.headline.getText()}`)
    }

    async validateSubHeadline() {
        await this.subHeadline.waitForDisplayed()
        assert.equal(await this.subHeadline.getText(), this.subHeadlineText, `Wrong SubHeadline\n Expected: ${this.subHeadlineText}\n Actual: ${await this.subHeadline.getText()}`)
    }

    async validateSubtitles() {
        let values = Object.values(this.subtitleTexts)
        for (let i = 0; i < values.length; i++) {
            await this.subtitles[i].waitForDisplayed()
            assert.equal(await this.subtitles[i].getText(), values[i], `Wrong Subtitle\n Expected: ${values[i]}\n Actual: ${await this.subtitles[i].getText()}`)
        }
    }

    async validateBlockSubtitles() {
        let values = Object.values(this.blockSubtitleTexts)
        for (let i = 0; i < values.length; i++) {
            await this.blockSubtitles[i].waitForDisplayed()
            assert.equal(await this.blockSubtitles[i].getText(), values[i], `Wrong Block Subtitle\n Expected: ${values[i]}\n Actual: ${await this.blockSubtitles[i].getText()}`)
        }
    }

    async validatePageTitle() {
        assert.equal(await browser.getTitle(), this.titleContent, `Wrong Title Content\n Expected: ${this.titleContent}\n Actual: ${await browser.getTitle()}`)
    }

    async checkRequestStatus(URLCodeRequestList) {
        await browser.setupInterceptor();
        let keys = Object.keys(URLCodeRequestList)
        let values = Object.values(URLCodeRequestList)
        for (let i = 0; i < keys.length; i++) {
            for (let j = 0; j < 1; j++) {
                await browser.expectRequest(values[i][j], keys[i], values[i][j + 1])
            }
        }
        await browser.pause(2000)
        await browser.assertRequests();

    }

      async validateBtns(btnType, btnData, webBtnData) {
        let keys = Object.keys(btnData)
        for (let i = 0; i < keys.length; i++) {
            await btnType[i].waitForClickable()
            webBtnData[await btnType[i].getText()] = await btnType[i].getAttribute('href')
            for (let j = 0; j < keys.length; j++) {
                assert.equal(Object.entries(webBtnData)[i][j], Object.entries(btnData)[i][j], `Primary Button Text & Href are Wrong! EXPECTED: ${Object.entries(btnData)[i][j]}, \nACTUAL: ${Object.entries(webBtnData)[i][j]}`)
            }
        }
    }
    //IS IT POSSIBLE THAT THE ELEMENT IS CLICKABLE AND THE HREF IS CORRECT BUT IT TAKES TO SOMEWHERE ELSE UNLESS IT"S A REDIRECT? SHO

    async switchBackToMainPage(params = '') {
        if (await this.requiredPartOfUrl == null) {
            await browser.switchWindow('/' + params)
            await browser.fullscreenWindow()

        }
        else {
            await browser.switchWindow('/' + this.requiredPartOfUrl + params)
            browser.fullscreenWindow()
        }
    }

    async waitUntilBrowserUrlIsNotBlank(){
        await browser.waitUntil(
            () => browser.getUrl() != 'about:blank',
            {
                timeoutMsg: 'Browser Url Is stll blank'
            }
        );
    }

}




module.exports = BasePage