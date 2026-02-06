import { test, expect } from "@playwright/test";

test(" SauceDemo", async ({ page }) => {
  //Sauce Demo App
  await page.goto("https://www.saucedemo.com/");

  //Login
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.locator('input[name="password"]').fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  //Click on product
  await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
  await page.locator(".shopping_cart_link").click();
  //Proceed to checkout
  await page.getByRole("button", { name: "Checkout" }).click();

  //Fill Details
  await page.locator("#first-name").fill("Person");
  await page.locator("#last-name").fill("Doe");
  await page.locator("#postal-code").fill("12345");
  await page.getByText("Continue").click();

  await page.locator('button:has-text("Finish")').click();
  await expect(
    page.getByRole("heading", { name: "Thank you for your order!" })
  ).toBeVisible();
  //Click on Hamburger Icon
  await page.getByRole("button", { name: "Open Menu" }).click();
  //Logout
  await page.locator('a:has-text("Logout")').click();
  //Back to Login Page
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
});
