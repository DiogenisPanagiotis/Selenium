const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder() // build WebDriver
     .forBrowser('chrome') // for Chrome
     .build();

browser.manage().window().setSize(1280, 720)
       .then(() => browser.sleep(3000)
       .then(() => browser.quit()));
