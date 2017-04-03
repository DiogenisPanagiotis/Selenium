"use strict";

const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder() // build WebDriver
     .forBrowser('chrome') // for Chrome
     .build();

function logTitle() {
  browser.getTitle().then((title) => {
    console.log(`Page title is: ${title}`);
  });
}

function clickLink(link) {
  link.click();
}

function handleError(err) {
  console.error(`Something went wrong:
  ${err.stack}`);
  closeBrowser();
}

function fetchLink() {
  return browser.findElements(webdriver.By.css('[href="htt://www.iacapps.com/"]')).then((result) => {
    return result[0];
  });
}

function closeBrowser() {
  browser.quit();
}

browser.get('https://www.google.com');
browser.findElement(webdriver.By.name('q')).sendKeys('iac applications');
browser.findElement(webdriver.By.name('btnG')).click();
browser.wait(fetchLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleError);
