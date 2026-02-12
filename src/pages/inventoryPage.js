import { expect } from "@playwright/test";
import { InventorySelectors } from "../selectors/Selectors";
import { InventoryData } from "../data/testData";

export async function validateAllSortingOptions(page) {
  const scenarios = Object.values(InventoryData.sortOptions);

  for (const scenario of scenarios) {
    await page.selectOption(InventorySelectors.sortDropdown, scenario.value);

    const selector = scenario.expectedFirst.includes("$")
      ? InventorySelectors.productPrice
      : InventorySelectors.productName;

    await expect(page.locator(selector).first()).toHaveText(
      scenario.expectedFirst
    );
  }
}

// ---------------- CART ACTIONS ----------------

export async function addItem(page) {
  await page.locator(InventorySelectors.addBtn).first().click();
  await expect(page.locator(InventorySelectors.badge)).toHaveText("1");
}

export async function removeItem(page) {
  await page.locator(InventorySelectors.removeBtn).first().click();
  await expect(page.locator(InventorySelectors.badge)).not.toBeVisible();
}

export async function verifyBadgeCount(page, count) {
  const badge = page.locator(InventorySelectors.badge);
  if (count === "0" || count === 0) {
    await expect(badge).not.toBeVisible();
  } else {
    await expect(badge).toHaveText(count.toString());
  }
}
export async function goToCart(page) {
  await page.locator(InventorySelectors.cart).click();
}
