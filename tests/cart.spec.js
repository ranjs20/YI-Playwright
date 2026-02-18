import { test } from "@playwright/test";
import * as cartPage from "../pages/cartPage";
import { gotoInventoryPage } from "../utils/actionUtils";

test.describe("Cart Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await gotoInventoryPage(page);
    await cartPage.addItemAndNavigate(page);
  });

  test("TC_CART_01 : Verify Product is visible in the list when added from the inventory page.", async ({
    page,
  }) => {
    await cartPage.verifyNumberOfItems(page, 1);
  });

  test("TC_CART_02 : Verify Item is removed from the UI when the 'Remove' button is clicked.", async ({
    page,
  }) => {
    await cartPage.removeItem(page);
  });

  test("TC_CART_03 : Verify Inventory page is displayed when the 'Continue Shopping' button is selected.", async ({
    page,
  }) => {
    await cartPage.clickContinueShopping(page);
  });

  test("TC_CART_04 : Verify Checkout information form appears with a non-empty cart state.", async ({
    page,
  }) => {
    await cartPage.clickCheckout(page);
  });
});
