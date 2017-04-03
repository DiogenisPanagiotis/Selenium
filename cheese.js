var driver = new webdriver.Builder().build(); // build WebDriver
driver.get('http://www.google.com'); // fetch url

var element = driver.findElement(webdriver.By.name('q'));
element.sendKeys('Cheese!');
element.submit();

driver.getTitle().then(function(title) {
  console.log(`Page title is: ${title}`);
});

driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
  });
}, 3000);

driver.getTitle().then(function(title) {
  console.log(`Page title is: ${title}`);
});

driver.quit(); // terminate
