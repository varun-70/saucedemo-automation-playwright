const { page } = require('@playwright/test');
const {LogInPage} = require("../pages/LogInPage");
const {Constants} = require("../constants/Constants");

class FrequentAutomation {
    constructor(page) {
        this.page = page;
    }

    async login() {
        let logInPage = new LogInPage(this.page);
        await logInPage.enterUsername(Constants.STANDARD_USER);
        await logInPage.enterPassword(Constants.PASSWORD);
        await logInPage.clickLoginBtn();
    }
}
module.exports = FrequentAutomation;