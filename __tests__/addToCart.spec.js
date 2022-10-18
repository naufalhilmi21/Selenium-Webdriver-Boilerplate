const { Builder, By } = require("selenium-webdriver");

require("chromedriver");

describe("Add to cart", () => {
  let browser;

  beforeEach(async () => {
    browser = await new Builder()
      .forBrowser("chrome")
      .build();
    browser.get("https://www.saucedemo.com/");

    const usernameField = await browser.findElement(By.id("user-name"));
    const passwordField = await browser.findElement(By.id("password"));
    const loginButton = await browser.findElement(By.id("login-button"));

    await usernameField.sendKeys("standard_user");
    await passwordField.sendKeys("secret_sauce");
    await loginButton.click();
  });

  afterAll(() => {
    browser.quit();
  });

  test("should success add to cart", async () => {
    const addToCartButtonBackpack = await browser.findElement(By.css("#add-to-cart-sauce-labs-backpack"));
    const addToCartButtonBikeLight = await browser.findElement(By.css("#add-to-cart-sauce-labs-bike-light"));
    const cartIcon = await browser.findElement(By.css("#shopping_cart_container"));
    
    await addToCartButtonBackpack.click();
    await addToCartButtonBikeLight.click();
    await cartIcon.click();

    // validasi
    const pageTitle = await browser.findElement(By.css("#header_container > div.header_secondary_container > span"));
    const itemCartListBackpack = await browser.findElement(By.css("#item_4_title_link > div"));
    const itemCartListBikeLight = await browser.findElement(By.css("#item_0_title_link > div"));

    expect(await pageTitle.getText()).toEqual("YOUR CART");
    expect(await itemCartListBackpack.getText()).toEqual("Sauce Labs Backpack");
    expect(await itemCartListBikeLight.getText()).toEqual("Sauce Labs Bike Light");
  });
  
  test("should success add to cart", async () => {
    const addToCartButtonBackpack = await browser.findElement(By.css("#add-to-cart-sauce-labs-backpack"));
    const addToCartButtonBikeLight = await browser.findElement(By.css("#add-to-cart-sauce-labs-bike-light"));
    const cartIcon = await browser.findElement(By.css("#shopping_cart_container"));
    
    await addToCartButtonBackpack.click();
    await addToCartButtonBikeLight.click();
    await cartIcon.click();

    // validasi
    const pageTitle = await browser.findElement(By.css("#header_container > div.header_secondary_container > span"));
    const itemCartListBackpack = await browser.findElement(By.css("#item_4_title_link > div"));
    const itemCartListBikeLight = await browser.findElement(By.css("#item_0_title_link > div"));

    expect(await pageTitle.getText()).toEqual("YOUR CART");
    expect(await itemCartListBackpack.getText()).toEqual("Sauce Labs Backpack");
    expect(await itemCartListBikeLight.getText()).toEqual("Sauce Labs Bike Light");
  });
});
