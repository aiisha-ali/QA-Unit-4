import {
  Builder,
  By,
  Capabilities,
  WebDriver,
  until,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

test("As a User, I want to remove items from my basket from the Cart page.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.cartBtn);
  await driver.click(driver.removeBackpackBtn);
  await driver.click(driver.removeLightBtn);
  expect(value).toBe(driver.url);
});

test("As a User, I want to remove items from my basket from the Inventory page.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.removeBackpackBtn);
  await driver.click(driver.removeLightBtn);
  expect(value).toBe(driver.url);
});

test("As a User, I want to verify that the sum of money I need to pay for the products I added to my basket equals to the sum of money these products cost plus some taxes.", async () => {
  await driver.get("ttps://www.saucedemo.com/inventory.html");
  await driver.click(driver.cartBtn);
  await driver.click(driver.checkoutBtn);
  await driver.findElement(driver.fName).sendKeys("Aisha");
  await driver.findElement(driver.lName).sendKeys("Ali");
  await driver.findElement(driver.zipcode).sendKeys("55337");
  await driver.click(driver.continueBtn);
  expect(total).toBe("$43.18");
});
