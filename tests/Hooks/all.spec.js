import { test, expect } from "@playwright/test";
let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  //Login
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
});
test.afterAll(async () => {
  //Logout
  await page.click("#react-burger-menu-btn");
  await page.getByRole("link", { name: "Logout" }).click();
});

test("Home Page Test", async () => {
  //Home Page
  const products = await page.$$(".inventory_item");
  await expect(products).toHaveLength(6);
});

test("Add Product to Cart", async () => {
  // await page.goto("https://www.saucedemo.com/");

  //Add to cart
  await page.click("#item_0_title_link");
  await page.click("#add-to-cart");
  //Check if added
  await expect(page.locator("#remove")).toBeVisible();
});
