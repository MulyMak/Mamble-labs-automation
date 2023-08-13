/**
 * @author emakaryan
 * @date 20-11-2021
 */

class ContentData {
    get validName() { return this.randomData(15).replace(/[0-9]/g, 'a') }
    get validEmail() { return this.randomData(6) + '@gmail.com' }
    get validSubject() { return this.randomData(15).replace(/[0-9]/g, '') }
    get validMessage() { return this.randomData(10).replace(/[0-9]/g, 'a') }

    get invalidShortName() { return this.randomData(1).replace(/[0-9]/g, 'a')}
    get invalidSymbolName() { return this.randomNumAndSymbol(3)}
    get invalidEmail() { return this.randomData(4) }
    get invalidShortSubject() { return this.randomData(3)}
    get invalidSymbolSubject() {return '%'}
    get invalidMessage() { return this.randomData(4) }

    get emptyString() { return ' ' }


    randomData(length) {
        return (Math.random() + 1).toString(36).substr(2, length)
    }

    randomNumAndSymbol(length) {
        let randomChars = '0123456789!@#$%^&*()'
        let result = ''
        for (let i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
    }
}


module.exports = ContentData