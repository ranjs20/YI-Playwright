import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { SidebarPage } from "../pages/sidebarPage";
import { InventoryPage } from "../pages/inventoryPage";
import { LoginData } from "../data/testData";
import { InventorySelectors, LoginSelectors } from "../selectors/Selectors";

test.describe("Sidebar Functionality", () => {
  let sidebarPage, inventoryPage, loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    sidebarPage = new SidebarPage(page);
    inventoryPage = new InventoryPage(page);

    // Each test starts fresh with a login
    await loginPage.gotoPage("");
    await loginPage.login(LoginData.validUsers[0], LoginData.password);
  });

  test("Logout successfully", async ({ page }) => {
    await sidebarPage.logout();

    const loginBtn = page.locator(LoginSelectors.loginButton);
    await expect(loginBtn).toBeVisible();
  });

  test("Reset App", async ({ page }) => {
    await inventoryPage.addItem();
    const badge = page.locator(InventorySelectors.badge);

    // Verify item was added
    await expect(badge).toBeVisible();

    // Perform Reset
    await sidebarPage.resetApp();

    await expect(badge).toBeHidden();
  });
});
