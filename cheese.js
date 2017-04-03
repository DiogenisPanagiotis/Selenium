const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder() // build WebDriver
    .forBrowser('chrome') // for Chrome
    .build();

driver.get('http://www.google.com'); // fetch url

let element = driver.findElement(webdriver.By.name('q'));
element.sendKeys('Cheese!');
element.submit();

driver.getTitle().then((title) => {
  console.log(`Page title is: ${title}`);
});

driver.wait(() => {
  return driver.getTitle().then(function(title) {
    return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
  });
}, 3000);

driver.getTitle().then((title) => {
  console.log(`Page title is: ${title}`);
});

driver.quit(); // terminate
