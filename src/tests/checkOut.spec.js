import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";
import { CheckOutPage } from "../pages/checkoutPage";
import { LoginData, CheckOutData } from "../data/testData";
import { InventorySelectors } from "../selectors/Selectors";

test.describe("CheckOut Suite", () => {
  let inventoryPage, cartPage, checkoutPage;
  test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckOutPage(page);

    const loginPage = new LoginPage(page);
    await loginPage.gotoPage("");
    await loginPage.login(LoginData.validUsers[0], LoginData.password);
  });
  test("Checking out with atleast one item", async ({ page }) => {
    await inventoryPage.addItem();
    await expect(page.locator(InventorySelectors.badge)).toBeVisible();
    await inventoryPage.goToCart();
    await cartPage.clickCheckout();
    await checkoutPage.fillInfo(
      CheckOutData.customer.firstName,
      CheckOutData.customer.lastName,
      CheckOutData.customer.postalCode
    );
    await checkoutPage.finishPurchase();
    const success = await checkoutPage.getSuccessMessage();
    expect(success).toContain(CheckOutData.successMessage);
  });

  //------------CHECKOUT WITH EMPTY CART--------------------------
  test.fail("Checking out with empty cart", async ({ page }) => {
    await inventoryPage.goToCart();
    const items = page.locator(InventorySelectors.badge);
    await expect(items).toBeHidden();
    await cartPage.clickCheckout();
    await expect(page).not.toHaveURL(/checkout-step-one/);
  });
});
