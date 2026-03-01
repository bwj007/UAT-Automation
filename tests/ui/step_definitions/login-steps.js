const { Given, When, Then, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;
setDefaultTimeout(30000);

Given('I am on the login page', async function () {
  const options = new chrome.Options();
  options.addArguments('--headless'); // Run in headless mode for CI
  driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
  await driver.get('https://the-internet.herokuapp.com/login');
});

When('I enter username {string} and password {string}', async function (username, password) {
  await driver.findElement(By.id('username')).sendKeys(username);
  await driver.findElement(By.id('password')).sendKeys(password);
  await driver.findElement(By.css('button[type="submit"]')).click();
});

Then('I should see {string}', async function (expected) {
  await driver.wait(until.elementLocated(By.css('body')), 5000);
  const bodyText = await driver.findElement(By.css('body')).getText();
  if (!bodyText.includes(expected)) {
    throw new Error(`Expected "${expected}", but got "${bodyText}"`);
  }
});

After(async function () {
  if (driver) {
    await driver.quit();
    driver = null;
  }
});