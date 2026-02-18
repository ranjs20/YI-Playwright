import { test } from "@playwright/test";
import * as checkoutPage from "../pages/checkOutPage";
import { gotoInventoryPage } from "../utils/actionUtils";

test.describe("CheckOut Suite", () => {
  test.beforeEach(async ({ page }) => {
    await gotoInventoryPage(page);
  });

  test("Verify Successful Checkout Flow", async ({ page }) => {
    await checkoutPage.performSuccessfulCheckout(page);
  });

  test.fail("Verify Empty Cart Block", async ({ page }) => {
    await checkoutPage.verifyEmptyCartBlocked(page);
  });
});
