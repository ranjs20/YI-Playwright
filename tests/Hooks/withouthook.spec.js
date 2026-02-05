import { test, expect } from "@playwright/test";
test("Home Page Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //Login
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  //Home Page
  const products = await page.$$(".inventory_item");
  await expect(products).toHaveLength(6);
  //Logout
  await page.click("#react-burger-menu-btn");
  await page.getByRole("link", { name: "Logout" }).click();
});

test("Add Product to Cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //Login
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  //Add to cart
  await page.click("#item_0_title_link");
  await page.click("#add-to-cart");
  //Check if added
  await expect(page.locator("#remove")).toBeVisible();

  //Logout
  await page.click("#react-burger-menu-btn");
  await page.getByRole("link", { name: "Logout" }).click();
});
