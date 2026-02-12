import { test } from "@playwright/test";
import * as loginPage from "../pages/loginPage";
import * as inventoryPage from "../pages/inventoryPage";

test.describe("Inventory Page", () => {
  test.beforeEach(async ({ page }) => {
    await loginPage.loginStandardUser(page);
  });
  test("Add and Remove Item Flow", async ({ page }) => {
    await inventoryPage.addItem(page);
    await inventoryPage.removeItem(page);
  });
  test("Verify All Filtering Scenarios", async ({ page }) => {
    await inventoryPage.validateAllSortingOptions(page);
  });
});
