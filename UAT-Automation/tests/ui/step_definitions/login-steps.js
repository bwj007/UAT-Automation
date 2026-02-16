const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;

Given('I am on the login page', async function () {
  const options = new chrome.Options();
  options.addArguments('--headless'); // Run in headless mode for CI
  driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
  await driver.get('http://localhost:3000');
});

When('I enter username {string} and password {string}', async function (username, password) {
  await driver.findElement(By.id('user')).sendKeys(email);
  await driver.findElement(By.id('password')).sendKeys(password);
  await driver.findElement(By.css('.button-primary')).click();
});

Then('I should see {string}', async function (expected) {
  await driver.wait(until.elementLocated(By.css('body')), 5000);
  const bodyText = await driver.findElement(By.css('body')).getText();
  if (!bodyText.includes(expected)) {
    throw new Error(`Expected "${expected}", but got "${bodyText}"`);
  }
});