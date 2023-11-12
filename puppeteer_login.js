const puppeteer = require('puppeteer');
const config = require('./config.js');

(async () => {
    // Use headless: false to see the browser in action
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Get the config values
    const loginPage = config.loginPage;
    const usernameField = config.usernameField;
    const passwordField = config.passwordField;
    const usernameValue = config.usernameValue;
    const passwordValue = config.passwordValue;
    const submitButton = config.submitButton;

    // Go to the login page
    await page.goto(loginPage);

    // Wait for the login fields to be available
    await page.waitForSelector(usernameField);
    await page.waitForSelector(passwordField);

    // Input username and password
    await page.type(usernameField, usernameValue);
    await page.type(passwordField, passwordValue);

    // Click on the submit button
    await page.click(submitButton);

    // Close the browser
    await browser.close();
})();
