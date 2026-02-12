import { expect } from "@playwright/test";
import * as base from "../base/basepage";
import { CartSelectors, InventorySelectors } from "../selectors/Selectors";
import * as inventoryPage from "./inventoryPage";

export async function addItemAndNavigate(page) {
  await inventoryPage.addItem(page);
  await base.click(page, InventorySelectors.badge);
}

export async function verifyNumberOfItems(page, count) {
  const items = page.locator(CartSelectors.cartItem);
  await expect(items).toHaveCount(count);
}

export async function removeItem(page) {
  await base.click(page, CartSelectors.removeBtn);
  await verifyNumberOfItems(page, 0);
}

/**
 * Proceeds to the checkout info page
 */
export async function clickCheckout(page) {
  await base.click(page, CartSelectors.checkoutBtn);
  await expect(page).toHaveURL(/checkout-step-one/);
}

export async function clickContinueShopping(page) {
  await inventoryPage.goToCart(page);
  await page.locator(CartSelectors.continueBtn).click();
  await expect(page).toHaveURL(/inventory.html/);
}
