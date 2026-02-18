import { test } from "@playwright/test";
import { gotoInventoryPage } from "../utils/actionUtils";
import * as sidebarPage from "../pages/sidebarPage";

test.describe("Sidebar & App State Suite", () => {
  test.beforeEach(async ({ page }) => {
    await gotoInventoryPage(page);
  });

  test("Verify Reset App State clears the cart", async ({ page }) => {
    await sidebarPage.resetAppState(page);
  });

  test("Verify User can Logout", async ({ page }) => {
    await sidebarPage.logout(page);
  });
});
