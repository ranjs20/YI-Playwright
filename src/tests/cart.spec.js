import { test } from "@playwright/test";
import * as loginPage from "../pages/loginPage";
import * as inventoryPage from "../pages/inventoryPage";
import * as cartPage from "../pages/cartPage";

test.describe("Cart Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await loginPage.loginStandardUser(page);

    await cartPage.addItemAndNavigate(page);
  });

  test("Verify Product is in cart", async ({ page }) => {
    await cartPage.verifyNumberOfItems(page, 1);
  });

  test("Verify item removal", async ({ page }) => {
    await cartPage.removeItem(page);
  });

  test("Verify continue shopping flow", async ({ page }) => {
    await cartPage.clickContinueShopping(page);
  });

  test("Verify checkout navigation", async ({ page }) => {
    await cartPage.clickCheckout(page);
  });
});
