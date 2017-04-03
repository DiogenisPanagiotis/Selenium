const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder() // build WebDriver
     .forBrowser('chrome') // for Chrome
     .build();

browser.get('http://en.wikipedia.org/wiki/Wiki');
browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then((links) => {
  console.log(`Found ${links.length} Wiki links.`);
  browser.quit();
});
