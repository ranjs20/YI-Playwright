import { test } from "@playwright/test";
import * as checkoutPage from "../pages/checkOutPage";
import { gotoInventoryPage } from "../utils/actionUtils";

test.describe("CheckOut Suite", () => {
  test.beforeEach(async ({ page }) => {
    await gotoInventoryPage(page);
  });

  test("TC_CHECKOUT_01 : Verify Checkout step is passed when all required fields are filled.", async ({
    page,
  }) => {
    await checkoutPage.performSuccessfulCheckout(page);
  });

  test.fail(
    "TC_CHECKOUT_02 : Verify 'Checkout' button is disabled if the cart contains zero items.",
    async ({ page }) => {
      await checkoutPage.verifyEmptyCartBlocked(page);
    }
  );
});
