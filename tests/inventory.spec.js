import { test } from "@playwright/test";
import { gotoInventoryPage } from "../utils/actionUtils";
import * as inventoryPage from "../pages/inventoryPage";

test.describe("Inventory Page", () => {
  test.beforeEach(async ({ page }) => {
    await gotoInventoryPage(page);
  });
  test("TC_INVENT_01 : Verify the Cart Badge reflects the selection when items are added or removed from the inventory.", async ({
    page,
  }) => {
    await inventoryPage.addItem(page);
    await inventoryPage.removeItem(page);
  });
  test("TC_INVENT_02 :Verify Product List order updates correctly when each sorting filter is applied ", async ({
    page,
  }) => {
    await inventoryPage.validateAllSortingOptions(page);
  });
});
