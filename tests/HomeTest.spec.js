const { test } = require('@playwright/test');
const TestDataReader = require("../provider/TestDataReader");
const {HomePage} = require("../pages/HomePage");
const {Constants, ErrorMessages} = require("../constants/Constants");
const FrequentAutomation = require("../utils/FrequentAutomation");

test.describe('Home Page Tests', async () => {
    let homePage;
    let frequentAutomation;

    test.beforeAll('Test Data Reader', async () => {
        await TestDataReader.readFromJson();
    })

    test.beforeEach('Initialize', async ({ page }) => {
        await TestDataReader.readFromJson();
        homePage = new HomePage(page);
        frequentAutomation = new FrequentAutomation(page);
        await page.goto(Constants.URL);
    })

    test('Copy Right Label Test', { tag: '@Regression' }, async() => {
        await frequentAutomation.login();
        await homePage.assertCopyRightLabel(Constants.COPY_RIGHT_LABEL);
    })

    test('Direct URL navigation test', { tag: '@Regression' }, async({ page }) => {
        await page.goto(`${Constants.URL}/inventory.html`);
        await homePage.assertWrongNavigationError(ErrorMessages.ERROR_WRONG_NAVIGATION);
    })
})