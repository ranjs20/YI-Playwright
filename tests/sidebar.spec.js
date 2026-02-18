import { test } from "@playwright/test";
import { gotoInventoryPage } from "../utils/actionUtils";
import * as sidebarPage from "../pages/sidebarPage";

test.describe("Sidebar & App State Suite", () => {
  test.beforeEach(async ({ page }) => {
    await gotoInventoryPage(page);
  });

  test("TC_SIDEBAR_01 : Verify Cart is cleared and the badge is removed when the 'Reset App State' option is selected from the sidebar.", async ({
    page,
  }) => {
    await sidebarPage.resetAppState(page);
  });

  test("TC_SIDEBAR_02 :Verify User is redirected to the Login page when the 'Logout' link is selected from the sidebar.", async ({
    page,
  }) => {
    await sidebarPage.logout(page);
  });
});
