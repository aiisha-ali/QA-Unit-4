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

test("As a User, I want to access the inventory page.", async () => {
  await driver.get("https://www.saucedemo.com/");
  await driver.findElement(driver.username).sendKeys("standard_user")  
  await driver.findElement(driver.password).sendKeys("secret_sauce")
  await driver.click(driver.loginBtn)
  expect(value).toBe(driver.'https://www.saucedemo.com/inventory.html');
});

test("As a User, I want to read the full description of Sauce Labs Backpack and Sauce Labs Bike Light products and add them to my basket from the products pages.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.slBackpack);
  await driver.click(driver.slbAddCart);
  await driver.click(driver.backBtn);
  await driver.click(driver.bikeLight);
  await driver.click(driver.blAddCart);
  await driver.click(driver.backBtn);
  expect(value).toBe(driver.url);
});

test("As a User, I want to be able to add a product from an inventory page by clicking to the ADD TO CART button of one of the products.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.cartBtn);
  expect(value).toBeTruthy();
});

test("As a User, I want to check if my basket contains two products.", async () => {
    await driver.get("https://www.saucedemo.com/inventory.html");
    await driver.click(driver.teeAddCart);
    expect(value).toBeTruthy();
  });

afterAll(async () => {
    await driver.quit()
  });