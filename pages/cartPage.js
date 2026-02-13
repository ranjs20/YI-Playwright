import { expect } from "@playwright/test";
import * as utils from "../utils/actionUtils";
import * as inventoryPage from "./inventoryPage";

export const CartSelectors = {
  cartItem: ".cart_item",
  checkoutBtn: "#checkout",
  removeBtn: 'button:has-text("Remove")',
  continueBtn: "#continue-shopping",
};
export async function addItemAndNavigate(page) {
  await inventoryPage.addItem(page);
  await utils.click(page, inventoryPage.InventorySelectors.badge);
}

export async function verifyNumberOfItems(page, count) {
  const items = page.locator(CartSelectors.cartItem);
  await expect(items).toHaveCount(count);
}

export async function removeItem(page) {
  await utils.click(page, CartSelectors.removeBtn);
  await verifyNumberOfItems(page, 0);
}

export async function clickCheckout(page) {
  await utils.click(page, CartSelectors.checkoutBtn);
  await expect(page).toHaveURL(/checkout-step-one/);
}

export async function clickContinueShopping(page) {
  await inventoryPage.goToCart(page);
  await page.locator(CartSelectors.continueBtn).click();
  await expect(page).toHaveURL(/inventory.html/);
}
