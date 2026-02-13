import { test } from "@playwright/test";
import { loginStandardUser } from "../pages/loginPage";
import * as checkoutPage from "../pages/checkOutPage";

test.describe("CheckOut Suite", () => {
  test.beforeEach(async ({ page }) => {
    await loginStandardUser(page);
  });

  test("Verify Successful Checkout Flow", async ({ page }) => {
    await checkoutPage.performSuccessfulCheckout(page);
  });

  test.fail("Verify Empty Cart Block", async ({ page }) => {
    await checkoutPage.verifyEmptyCartBlocked(page);
  });
});
