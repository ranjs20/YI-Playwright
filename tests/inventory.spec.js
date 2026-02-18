import { test } from "@playwright/test";
import { gotoInventoryPage } from "../utils/actionUtils";
import * as inventoryPage from "../pages/inventoryPage";

test.describe("Inventory Page", () => {
  test.beforeEach(async ({ page }) => {
    await gotoInventoryPage(page);
  });
  test("Add and Remove Item Flow", async ({ page }) => {
    await inventoryPage.addItem(page);
    await inventoryPage.removeItem(page);
  });
  test("Verify All Filtering Scenarios", async ({ page }) => {
    await inventoryPage.validateAllSortingOptions(page);
  });
});
