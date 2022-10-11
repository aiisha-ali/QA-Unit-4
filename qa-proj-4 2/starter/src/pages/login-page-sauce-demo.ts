import { By } from "selenium-webdriver";

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
    
export class loginPage {
  //#3
  loginBtn: By = By.xpath('//*[@id="login-button"]')
  //#4
  username: By = By.css('#user-name')
  //#5
  password: By = By.css('#password')
   
  loginCredentials: By = By.xpath('//*[@id="login_credentials"]')
//#6
async navigate() {
  await this.driver.get(this.url)
  await this.driver.wait(until.elementLocated(this.loginBtn))
}
 


//#7
  async navigate() {
  await this.driver.wait(until.elementLocated(this.username))
}
//#8
async navigate() {
  await this.driver.wait(until.elementLocated(this.password))
}
//#9
async navigate(){
  await this.driver.wait(until.elementLocated(this.loginCredentials))
}

//#10


constructor() {
  super({ url: "https://www.saucedemo.com/" });
}