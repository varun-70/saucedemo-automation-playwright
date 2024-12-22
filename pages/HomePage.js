const { expect } = require('@playwright/test');
const {LogInPage} = require("./LogInPage");

class HomePage {
    constructor(page) {
        this.pageTitle = page.locator('[class="product_label"]');
        this.copyRightLabel = page.locator('div[class=\'footer_copy\']');
        this.logInPage = new LogInPage(page);
    }

    async isHomePageDisplayed() {
        await expect(this.pageTitle.isVisible()).toBeTruthy();
    }

    async assertCopyRightLabel(expectedCopyRightLabel) {
        expect(this.copyRightLabel).toHaveText(expectedCopyRightLabel);
    }

    async assertWrongNavigationError(errorMessage) {
        expect(this.logInPage.errorMsg).toHaveText(errorMessage);
    }

    //     public HomePage assertWrongNavigationError() {
    //         Assert.assertEquals(wrongNavigationError.getText(), "Epic sadface: You can only access '/inventory.html' when you are logged in.");
    //         return this;
    //     }
}
module.exports = { HomePage };