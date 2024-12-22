const { expect } = require('@playwright/test');

class LogInPage {
    constructor(page) {
        this.usernameTxtField = page.locator('[data-test="username"]');
        this.passwordTxtField = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[id="login-button"]');
        this.errorMsg = page.locator('h3[data-test="error"]'); //h3[data-test="error"]:has-text("Epic sadface:")
        this.closeErrorMsg = page.locator('button[class=\'error-button\']');
    }

    async enterUsername(username) {
        await this.usernameTxtField.fill(username);
        return this;
    }

    async enterPassword(password) {
        await this.passwordTxtField.fill(password);
        return this;
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
        return this;
    }

    async verifyErrorMessage(errorMessage) {
        await expect(this.errorMsg).toHaveText(errorMessage);
        return this;
    }

    async clickCloseErrorMsg() {
        await this.closeErrorMsg.click();
        return this;
    }

    async verifyErrorMsgNotDisplayed() {
        await expect(this.errorMsg.isHidden()).toBeTruthy();
        return this;
    }
}
module.exports = { LogInPage };