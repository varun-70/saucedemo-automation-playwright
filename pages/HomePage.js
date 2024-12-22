const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.pageTitle = page.locator('[class="product_label"]');
    }

    async isHomePageDisplayed() {
        await expect(this.pageTitle.isVisible()).toBeTruthy();
    }
}
module.exports = { HomePage };