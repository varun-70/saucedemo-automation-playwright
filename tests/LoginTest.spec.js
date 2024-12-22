const { test, expect } = require('@playwright/test');
const { LogInPage } = require('../pages/LogInPage');
const { HomePage } = require('../pages/HomePage');
const TestDataReader = require('../provider/TestDataReader');
const {Constants, ErrorMessages} = require('../constants/Constants');

test.describe('Login Validation', { tag: '@Login' }, async () => {
    let logInPage;
    let homePage;

    test.beforeAll('Test Data Reader', async () => {
        await TestDataReader.readFromJson();
    })

    test.beforeEach('Initialize', async ({ page }) => {
        await TestDataReader.readFromJson();
        logInPage = new LogInPage(page);
        homePage = new HomePage(page);
        await page.goto(Constants.URL);
    })

    test('Validating Valid Login Credentials', { tag: ['@Smoke', '@Regression'] }, async () => {
        await logInPage.enterUsername(Constants.STANDARD_USER);
        await logInPage.enterPassword(Constants.PASSWORD);
        await logInPage.clickLoginBtn();
        await homePage.isHomePageDisplayed();
    });

    [
        { testCaseName: 'ValidUsername_InvalidPassword', username: 'standard_user', password: '12345', errorMessage: 'Epic sadface: Username and password do not match any user in this service' },
        { testCaseName: 'ValidUsername_EmptyPassword', username: 'standard_user', password: '', errorMessage: 'Epic sadface: Password is required'},
        { testCaseName: 'EmptyUsername_EmptyPassword', username: '', password: '', errorMessage: 'Epic sadface: Username is required' },
        { testCaseName: 'InvalidUsername_InvalidPassword', username: '12345', password: '12345', errorMessage: 'Epic sadface: Username and password do not match any user in this service' }
    ].forEach(({ testCaseName, username, password , errorMessage}) => {
        test(`Validating invalid login ${testCaseName}`, { tag: '@Regression' }, async () => {
            await logInPage.enterUsername(username)
            await logInPage.enterPassword(password);
            await logInPage.clickLoginBtn();
            await logInPage.verifyErrorMessage(errorMessage);
            await logInPage.clickCloseErrorMsg();
            await logInPage.verifyErrorMsgNotDisplayed();
        })
    })
})