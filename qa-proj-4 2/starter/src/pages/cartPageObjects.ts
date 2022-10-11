import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

  export class Login extends BasePage {
  cartBtn: By = By.xpath('//*[@id="shopping_cart_container"]/a')
  removeBackpackBtn: By = By.xpath('//*[@id="remove-sauce-labs-backpack"]')
  removeLightBtn: By = By.xpath('//*[@id="remove-sauce-labs-bike-light"]')
  checkoutBtn: By = By.xpath('//*[@id="checkout"]')
  fName: By = By.xpath('//*[@id="first-name"]')
  lName: By = By.xpath('//*[@id="last-name"]')
  zipcode: By = By.xpath('//*[@id="postal-code"]')
  continueBtn: By = By.xpath('//*[@id="continue"]')
  total: By = By.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[7]')
  itemTotal: By = By.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[5]')
  tax: By = By.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[6]')
  
  constructor() {
    super({ url: "https://magento.softwaretestingboard.com/" });
  }
}