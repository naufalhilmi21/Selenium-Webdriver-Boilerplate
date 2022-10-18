const { Builder, By } = require("selenium-webdriver");

require("chromedriver");

describe("Login", () => {
  let browser;

  beforeAll(async () => {
    browser = await new Builder()
      .forBrowser("chrome")
      .build();
    browser.get("https://www.saucedemo.com/");
  });

  afterAll(() => {
    browser.quit();
  });

  test("should success login", async () => {
    const usernameField = await browser.findElement(By.id("user-name"));
    const passwordField = await browser.findElement(By.id("password"));
    const loginButton = await browser.findElement(By.id("login-button"));

    await usernameField.sendKeys("standard_user");
    await passwordField.sendKeys("secret_sauce");
    await loginButton.click();

    await browser.sleep(5000);
    const pageTitle = await browser.findElement(By.css("span.title"));
    await browser.sleep(2000);

    expect(await pageTitle.getText()).toEqual("PRODUCTS");
  });
});
